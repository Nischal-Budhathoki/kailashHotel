import { Request, Response, NextFunction } from "express";
import { prisma } from "../config/prisma";
import { createUserSchema } from "../zodValidation/userValidation.js";
import { userIdSchema } from "../zodValidation/idValidation.js";
import { updateUserSchema } from "../zodValidation/updateValidation.js";
import { Role } from "../generated/prisma/client";

// CREATE USER
export const userController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = createUserSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid user data",
        errors: result.error.flatten(),
      });
    }

    const { email, name, password, role } = result.data;

    if (!role) {
      return res.status(400).json({
        success: false,
        message: "Role is required",
      });
    }

    const user = await prisma.user.create({
      data: {
        email,
        name,
        password,
        role: role as Role,
      },
    });

    return res.status(201).json({
      success: true,
      data: user,
    });
  } catch {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// GET SINGLE USER
export const userReadController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = userIdSchema.safeParse({ id: req.params.id });

    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid user ID",
        errors: result.error.flatten(),
      });
    }

    const id = Number(result.data.id);

    const user = await prisma.user.findFirst({
      where: {
        id,
        deletedAt: null,
      },
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// GET ALL USERS
export const allUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await prisma.user.findMany({
      where: {
        deletedAt: null,
      },
    });

    return res.status(200).json({
      success: true,
      data: users,
    });
  } catch {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// UPDATE USER
export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const paramResult = userIdSchema.safeParse({ id: req.params.id });

    if (!paramResult.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid user ID",
        errors: paramResult.error.flatten(),
      });
    }

    const id = Number(paramResult.data.id);

    const bodyResult = updateUserSchema.safeParse(req.body);

    if (!bodyResult.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid update data",
        errors: bodyResult.error.flatten(),
      });
    }

    const existingUser = await prisma.user.findFirst({
      where: {
        id,
        deletedAt: null,
      },
    });

    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const cleanData = Object.fromEntries(
      Object.entries(bodyResult.data).filter(
        ([_, value]) => value !== undefined
      )
    );

    const updatedUser = await prisma.user.update({
      where: { id },
      data: cleanData,
    });

    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// SOFT DELETE USER
export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = userIdSchema.safeParse({ id: req.params.id });

    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid user ID",
        errors: result.error.flatten(),
      });
    }

    const id = Number(result.data.id);

    const existingUser = await prisma.user.findFirst({
      where: {
        id,
        deletedAt: null,
      },
    });

    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const deletedUser = await prisma.user.update({
      where: { id },
      data: {
        deletedAt: new Date(),
      },
    });

    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: deletedUser,
    });
  } catch {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// SOFT DELETE USERS BY ROLE
export const deleteUsersByRole = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { role } = req.body;

    if (!role) {
      return res.status(400).json({
        success: false,
        message: "Role is required",
      });
    }

    const result = await prisma.user.updateMany({
      where: {
        role,
        deletedAt: null,
      },
      data: {
        deletedAt: new Date(),
      },
    });

    return res.status(200).json({
      success: true,
      message: `Users with role ${role} soft deleted`,
      data: result,
    });
  } catch {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};