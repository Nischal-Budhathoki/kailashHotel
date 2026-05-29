import { z } from "zod";
export const updateBookingSchema = z
  .object({
    userId: z.number().int().positive(),
    roomId: z.number().int().positive(),
    checkIn: z.coerce.date(),
    checkOut: z.coerce.date(),
    status: z
      .enum(["PENDING", "CONFIRMED", "CANCELLED", "COMPLETED"])
      .default("PENDING"),
  })
  .refine((data) => data.checkOut > data.checkIn, {
    message: "Check-out must be after check-in",
    path: ["checkOut"],
  });