import { Request, Response, NextFunction, request } from "express";
import { prisma } from "../config/prisma";
import { createUserSchema } from "../zodValidation/userValidation";
import { userIdSchema } from "../zodValidation/idValidation";
import { success } from "zod";
import { Role } from "../generated/prisma/enums";
import { updateUserSchema } from "../zodValidation/updateValidation";


// create-user
export const userController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // 1. Validate with Zod
    const result = createUserSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        message:"Cannot retrieved the records !!!"
      });
    }

    const { email, name, password, role } = result.data

    // 2. Create user with Prisma
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password,
        role,
      },
    });

    // 3. Success response
    return res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.error("User creation error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// read-user
export const userReadController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // 1. validate params
    const result = userIdSchema.safeParse(req.params);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid user ID",
        errors: result.error.flatten(),
      });
    }

    const { id } = result.data;

    // 2. fetch user
    const user = await prisma.user.findUnique({
      where: { id },
    });

    // 3. not found
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // 4. success
    return res.status(200).json({
      success: true,
      data: user,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

//read-all-user
export const allUserController = async (
  req:Request,
   res:Response,
   next:NextFunction
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

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

//update-one user
export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = userIdSchema.safeParse(req.params.id);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid user ID",
        error: result.error.flatten(),
      });
    }

    const userId = Number(result.data);

    const bodyResult = updateUserSchema.safeParse(req.body);

    if (!bodyResult.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid update data",
        error: bodyResult.error.flatten(),
      });
    }

    const existingUser = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: bodyResult.data,
    });

    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};


// delete-single-user
export const deleteUser = async (
  req:Request, 
  res:Response, 
  next:NextFunction
) => {
  try {
    const result = userIdSchema.safeParse(req.params.id);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid user ID",
        error: result.error.flatten(),
      });
    }

    const userId = Number(result.data);

    const user = await prisma.user.delete({
      where: { id: userId },
      data: {
        deletedAt: new Date(), 
      },
    });

    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: user,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

//deleting many users
export const deleteUsersByRole = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const role = req.body.role;

    if (!role) {
      return res.status(400).json({
        success: false,
        message: "Role is required",
      });
    }

    const result = await prisma.user.deleteMany({
      where: { role },
    });

    return res.status(200).json({
      success: true,
      message: `Users with role ${role} deleted`,
      data: result,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// update-user
