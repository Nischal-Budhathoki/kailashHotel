import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

// ✅ Proper TypeScript augmentation
declare global {
  namespace Express {
    interface Request {
      user?: string | JwtPayload;
    }
  }
}

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "No token received",
    });
  }

  try {
    if (!process.env.JWT_SECRET_KEY) {
      throw new Error("JWT_SECRET_KEY not defined");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};