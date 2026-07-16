import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { prisma } from "../config/prisma";
import { generateAccessToken, generateRefreshToken } from "../utils/jwt";



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

 console.log("Generating Access Token...");
const accessToken = generateAccessToken(payload);
console.log("Access Token Generated");

console.log("Generating Refresh Token...");
const refreshToken = generateRefreshToken(payload);
console.log("Refresh Token Generated");

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
  } catch (error) {
  console.error("========== LOGIN ERROR ==========");

  if (error instanceof Error) {
    console.error(error.stack);
  } else {
    console.error(error);
  }

  return res.status(401).json({
    success: false,
    message: error instanceof Error ? error.message : "Unknown error",
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
