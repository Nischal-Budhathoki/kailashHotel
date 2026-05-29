import { z } from "zod";

export const roomIdSchema = z.object({
  id: z.string().transform((val) => Number(val)),
});

export const deleteRoomsSchema = z.object({
  ids: z.array(z.number()),
});