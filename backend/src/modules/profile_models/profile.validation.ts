import { z } from "zod";
/**
 * GET /profile
 * No request body is required.
 */
export const getProfileSchema = z.object({});

/**
 * PATCH /profile
 */
export const updateProfileSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "First name must be at least 2 characters.")
    .max(50, "First name cannot exceed 50 characters.")
    .optional(),

  lastName: z
    .string()
    .trim()
    .min(2, "Last name must be at least 2 characters.")
    .max(50, "Last name cannot exceed 50 characters.")
    .optional(),

  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s()]+$/, "Invalid phone number.")
    .min(7, "Phone number is too short.")
    .max(20, "Phone number is too long.")
    .optional(),

  address: z
    .string()
    .trim()
    .max(255, "Address cannot exceed 255 characters.")
    .optional(),

  city: z
    .string()
    .trim()
    .max(100, "City cannot exceed 100 characters.")
    .optional(),

  country: z
    .string()
    .trim()
    .max(100, "Country cannot exceed 100 characters.")
    .optional(),

  passportNumber: z
    .string()
    .trim()
    .max(50, "Passport number cannot exceed 50 characters.")
    .optional(),

  dateOfBirth: z.coerce.date().optional(),

  gender: z
    .enum(["MALE", "FEMALE", "OTHER"])
    .optional(),
});

/**
 * PATCH /profile/change-password
 */
export const changePasswordSchema = z
  .object({
    currentPassword: z
      .string()
      .min(8, "Current password must be at least 8 characters."),

    newPassword: z
      .string()
      .min(8, "New password must be at least 8 characters.")
      .max(100, "Password cannot exceed 100 characters.")
      .regex(/[A-Z]/, "Must contain at least one uppercase letter.")
      .regex(/[a-z]/, "Must contain at least one lowercase letter.")
      .regex(/[0-9]/, "Must contain at least one number.")
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Must contain at least one special character."
      ),

    confirmPassword: z.string(),
  })
  .refine(
    (data) => data.newPassword === data.confirmPassword,
    {
      path: ["confirmPassword"],
      message: "Passwords do not match.",
    }
  );

/**
 * POST /profile/avatar
 *
 * The image itself will be handled by Multer/Cloudinary.
 * We only validate optional metadata here.
 */
export const uploadAvatarSchema = z.object({
  alt: z
    .string()
    .trim()
    .max(100)
    .optional(),
});