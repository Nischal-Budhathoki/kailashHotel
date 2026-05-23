import { Request, Response, NextFunction, request } from "express";
import { prisma } from "../config/prisma";
import { createUserSchema } from "../zodValidation/userValidation";
import { userIdSchema } from "../zodValidation/idValidation";
import { success } from "zod";


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
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // 1. fetch all users
    const users = await prisma.user.findMany();

    // 2. if empty (optional check)§§ß
    if (!users || users.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No users found",
      });
    }

    // 3. success response
    return res.status(200).json({
      success: true,
      data: users,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};


// delete-single-user

// update-user
