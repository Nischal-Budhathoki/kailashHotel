import { Router } from "express";
import { PrismaClient } from "../../generated/prisma/client";

import { ProfileService } from "./profile.services";
import { ProfileController } from "./profile.controllers";
import { authenticate } from "../../middleware/user.middleware"; 

const router = Router();

const prisma = new PrismaClient();

const profileService = new ProfileService(prisma);
const profileController = new ProfileController(profileService);

/**
 * Get Logged-in User Profile
 */
router.get(
  "/",
  authenticate,
  profileController.getProfile
);

/**
 * Update Profile
 */
router.put(
  "/",
  authenticate,
  profileController.updateProfile
);

/**
 * Change Password
 */
router.patch(
  "/password",
  authenticate,
  profileController.changePassword
);

/**
 * Upload Avatar
 */
router.patch(
  "/avatar",
  authenticate,
  profileController.uploadAvatar
);

export default router;