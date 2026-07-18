import bcrypt from "bcryptjs";
import { PrismaClient, Profile, User } from "../../generated/prisma/client";

import {
  UpdateProfileDto,
  ChangePasswordDto,
  UploadAvatarDto,
} from "./profile.types";

export class ProfileService {
  constructor(private readonly prisma: PrismaClient) {}

  /**
   * Get profile of logged in user
   */
  public async getProfile(userId: number): Promise<Profile> {
    const user = await this.findUser(userId);

    const profile = await this.prisma.profile.findUnique({
      where: {
        userId: user.id,
      },
    });

    if (!profile) {
      throw new Error("Profile not found");
    }

    return profile;
  }

  /**
   * Update profile
   */
  public async updateProfile(
    userId: number,
    data: UpdateProfileDto,
  ): Promise<Profile> {
    await this.findUser(userId);

    this.validateProfile(data);

    return this.prisma.profile.update({
      where: {
        userId,
      },
      data,
    });
  }

  /**
   * Change password
   */
  public async changePassword(
    userId: number,
    dto: ChangePasswordDto,
  ): Promise<void> {
    const user = await this.findUser(userId);

    /**
     * Compare password
     * Hash password
     * Update password
     */

    // comparing password
    const isPasswordValid = await bcrypt.compare(
      dto.currentPassword,
      user.password,
    );

    // if password is false,
    if (!isPasswordValid) {
      throw new Error("Password did not match !! Try again");
    }

    // hash password
    const hashedPassword = await bcrypt.hash(dto.newPassword, 12);

    // updating the prisma file
    await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        password: hashedPassword,
      },
    });

    // verify password
    const isSamePassword = await bcrypt.compare(
      dto.newPassword,
      user.password
    );

    // if same password is not matching then
    if (isSamePassword) {
    throw new Error(
        "New password must be different from the current password."
    );
}

  }

  /**
   * Upload Avatar
   */
  public async uploadAvatar(
    userId: number,
    dto: UploadAvatarDto,
  ): Promise<Profile> {
    await this.findUser(userId);

    return this.prisma.profile.update({
      where: {
        userId,
      },
      data: {
        avatarUrl: dto.avatarUrl,
      },
    });
  }

  /**
   * Find User
   */
  private async findUser(userId: number): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }

  /**
   * Validate Profile
   */
  private validateProfile(data: UpdateProfileDto): void {
    if (data.phone && data.phone.length < 7) {
      throw new Error("Invalid phone number");
    }
  }
}
