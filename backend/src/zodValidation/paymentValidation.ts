import { z } from "zod"

export const createPaymentSchema = z.object({
  bookingId: z.number().int().positive(),

  amount: z.number().positive(),

  method: z.enum(["card", "cash", "online"]),

  status: z.enum(["pending", "paid", "failed"]).optional(),
});