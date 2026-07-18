import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

// 1. Define a strict user type (IMPORTANT for real projects)
export interface AuthUser extends JwtPayload {
  id: number;
  email?: string;
  role?: string;
}

// 2. Extend Express Request properly (NO any usage)
declare global {
  namespace Express {
    interface Request {
      user?: AuthUser;
    }
  }
}

// 3. Helper: extract token safely
const extractToken = (header?: string) => {
  if (!header) return null;

  const parts = header.split(" ");

  if (parts.length !== 2 || parts[0] !== "Bearer") {
    return null;
  }

  return parts[1];
};

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  const token = extractToken(authHeader);

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Authorization token missing or malformed",
    });
  }

  const secret = process.env.JWT_SECRET_KEY;

  if (!secret) {
    console.error("JWT_SECRET_KEY is missing in environment variables");
    return res.status(500).json({
      success: false,
      message: "Server configuration error",
    });
  }

  try {
    const decoded = jwt.verify(token, secret) as AuthUser;

    // Ensure correct type casting
    req.user = {
  ...decoded,
  id: Number(decoded.id),
};

    return next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};