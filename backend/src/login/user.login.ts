import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { prisma } from "../config/prisma";
import { Role, User } from "../generated/prisma";
import { comparePassword } from "../utils/password";
import { generateAccessToken, generateRefreshToken } from "../utils/jwt";

const JWT_SECRET = process.env.JWT_SECRET as string;

type LoginInput = {
  email: string;
  password: string;
};

export const loginUser = async ({ email, password }: LoginInput) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  console.log("DB USER:", user);

  if (!user) {
    throw new Error("Invalid Credentials");
  }

  const isPasswordMatched = await bcrypt.compare(password, user.password);

  if (!isPasswordMatched) {
    throw new Error("Invalid Credentials");
  }

  console.log("PASSWORD CHECK:", {
    input: password,
    dbHash: user.password,
  });

  const payload = {
    id: user.id,
    role: user.role,
  };

  const accessToken = generateAccessToken(payload);
  const refreshToken = generateRefreshToken(payload);

  return {
    user,
    accessToken,
    refreshToken,
  };
};

//in login controller storing cookie
export const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    console.log("LOGIN BODY:", req.body);

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const result = await loginUser({ email, password });

    //returning cookie
    res.cookie("refreshToken", result.refreshToken, {
      httpOnly: true,
      secure: false, // localhost
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      success: true,
      message: "Login successful",
      accessToken: result.accessToken,
      user: result.user,
    });
  } catch (error: any) {
    return res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

//logout controller
export const logoutController = (req: Request, res: Response) => {
  res.clearCookie("refreshToken");

  return res.json({
    success: true,
    message: "Logged out successfully",
  });
};
