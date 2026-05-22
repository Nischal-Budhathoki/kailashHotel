import { Request, Response, NextFunction } from "express";
import { prisma } from "../config/prisma";
import { createUserSchema } from "../zodValidation/userValidation";

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