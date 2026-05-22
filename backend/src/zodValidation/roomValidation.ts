import { z } from "zod"


export const createRoomSchema = z.object({
  roomNumber: z
    .number()
    .int("Room number must be an integer")
    .positive(),

  type: z.enum(["single", "double", "suite"]),

  price: z
    .number()
    .positive("Price must be greater than 0"),

  isAvailable: z.boolean().optional(), // default handled by DB
});