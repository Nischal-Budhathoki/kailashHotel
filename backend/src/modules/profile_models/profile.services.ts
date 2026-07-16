import {
  PrismaClient,
  Profile,
  User,
} from "../../generated/prisma/client";

import {
  UpdateProfileDto,
  ChangePasswordDto,
  UploadAvatarDto,
} from "./profile.types";

export class ProfileService {
  constructor(
    private readonly prisma: PrismaClient
  ) {}

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
    data: UpdateProfileDto
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
    dto: ChangePasswordDto
  ): Promise<void> {
    const user = await this.findUser(userId);

    /**
     * Compare password
     * Hash password
     * Update password
     */

    console.log(user, dto);
  }

  /**
   * Upload Avatar
   */
  public async uploadAvatar(
    userId: number,
    dto: UploadAvatarDto
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
  private async findUser(
    userId: number
  ): Promise<User> {
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
  private validateProfile(
    data: UpdateProfileDto
  ): void {
    if (data.phone && data.phone.length < 7) {
      throw new Error("Invalid phone number");
    }
  }
}