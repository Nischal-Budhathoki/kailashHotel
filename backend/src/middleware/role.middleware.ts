import { Request, Response, NextFunction } from "express";

export const roleMiddleware = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.user;

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    if (!user.role || !roles.includes(user.role)) {
      return res.status(403).json({
        success: false,
        message: "Forbidden: You do not have access",
      });
    }

    next();
  };
};