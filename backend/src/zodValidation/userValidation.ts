import { z } from "zod"
import { Role } from "../generated/prisma/enums";

export const userRoleEnum = z.enum(["ADMIN", "USER"]);

export const createUserSchema = z.object({
  email: z
    .string()
    .email("Invalid email format")
    .toLowerCase()
    .trim(),

  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters")
    .trim(),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(100)
    // optional strong password rule (recommended for production)
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Password must contain uppercase, lowercase, and number"
    ),

  role: z.nativeEnum(Role).optional().default(Role.USER), // default handled by Prisma (USER)
});