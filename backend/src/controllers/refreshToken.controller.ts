
import jwt from "jsonwebtoken";
import { generateAccessToken } from "../utils/jwt";
import { Request, Response } from "express";

export const refreshTokenController = (req: Request, res: Response) => {
  const token = req.cookies.refreshToken;

  if (!token) {
    return res.status(401).json({ message: "No refresh token" });
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_REFRESH_SECRET as string
    ) as { id: number; role: string };

    const payload = {
      id: decoded.id,
      role: decoded.role,
    };

    const newAccessToken = generateAccessToken(payload);

    return res.json({
      accessToken: newAccessToken,
    });
  } catch (error) {
    return res.status(403).json({ message: "Invalid refresh token" });
  }
};