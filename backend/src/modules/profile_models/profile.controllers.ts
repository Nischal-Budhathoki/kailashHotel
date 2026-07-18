import { Request, Response, NextFunction } from "express";
import { ProfileService } from "./profile.services";

export class ProfileController {
  constructor(
    private readonly profileService: ProfileService
  ) {}

  public getProfile = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const userId = Number(req.user!.id);

      const profile = await this.profileService.getProfile(userId);

      res.status(200).json({
        success: true,
        data: profile,
      });
    } catch (error) {
      next(error);
    }
  };

  public updateProfile = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const userId = Number(req.user!.id);

      const profile = await this.profileService.updateProfile(
        userId,
        req.body
      );

      res.status(200).json({
        success: true,
        data: profile,
      });
    } catch (error) {
      next(error);
    }
  };

  public changePassword = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const userId = Number(req.user!.id);

      await this.profileService.changePassword(
        userId,
        req.body
      );

      res.status(200).json({
        success: true,
        message: "Password updated successfully.",
      });
    } catch (error) {
      next(error);
    }
  };

  public uploadAvatar = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const userId = Number(req.user!.id);

      const profile = await this.profileService.uploadAvatar(
        userId,
        req.body
      );

      res.status(200).json({
        success: true,
        data: profile,
      });
    } catch (error) {
      next(error);
    }
  };
}