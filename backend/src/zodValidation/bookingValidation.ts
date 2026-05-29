import {z} from 'zod'



export const createBookingSchema = z
  .object({
    userId: z.number().int().positive(),
    roomId: z.number().int().positive(),
    checkIn: z.coerce.date(),
    checkOut: z.coerce.date(),
    status: z.enum(["PENDING", "CONFIRMED", "CANCELLED", "COMPLETED"])
  .default("PENDING"),
  })
  .refine((data) => data.checkOut > data.checkIn, {
    message: "Check-out must be after check-in",
    path: ["checkOut"],
  });

  //update
  export const bookingIdSchema = z.object({
     id: z.string().transform((val) => Number(val)),
  })

  //delete booking
  export const deleteBookingsSchema = z.object({
  ids: z.array(z.number().int().positive()),
});