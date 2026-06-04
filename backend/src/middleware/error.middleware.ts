import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  req.log?.error(
    {
      err,
      requestId: req.requestId,
    },
    "Unhandled Error"
  );

  res.status(500).json({
    message: "Internal Server Error",
    requestId: req.requestId,
  });
};