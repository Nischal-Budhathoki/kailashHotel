import { Gender } from "../../generated/prisma";

export interface UpdateProfileDto {
  phone?: string;
  address?: string;
  city?: string;
  country?: string;
  passportNumber?: string;
  avatarUrl?: string;
  gender?: Gender;
  dateOfBirth?: Date;
}

export interface ChangePasswordDto {
  currentPassword: string;
  newPassword: string;
}

export interface UploadAvatarDto {
  avatarUrl: string;
}