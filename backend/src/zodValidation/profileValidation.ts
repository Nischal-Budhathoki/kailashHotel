import {z} from "zod"

export const createProfileSchema = z.object({
  userId: z.number().int().positive(),

  phone: z.string().min(7).max(20).optional(),
  address: z.string().max(200).optional(),
  country: z.string().max(100).optional(),
  passport: z.string().max(50).optional(),
});