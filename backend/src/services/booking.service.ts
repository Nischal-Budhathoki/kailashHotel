import { prisma } from "../config/prisma";

type CreateBookingInput = {
  userId: number;
  roomId: number;
  checkIn: Date;
  checkOut: Date;
};

//create
export const createBookingService = async ({
  userId,
  roomId,
  checkIn,
  checkOut,
}: CreateBookingInput) => {
  const room = await prisma.room.findUnique({
    where: { id: roomId },
  });

  if (!room) {
    throw new Error("Room not found");
  }

  if (checkIn >= checkOut) {
    throw new Error("Invalid booking dates");
  }

  const overlapBooking = await prisma.booking.findFirst({
    where: {
      roomId,
      checkIn: {
        lt: checkOut,
      },
      checkOut: {
        gt: checkIn,
      },
    },
  });

  if (overlapBooking) {
    throw new Error("Room already booked for these dates");
  }

  const days = Math.ceil(
    (checkOut.getTime() - checkIn.getTime()) /
      (1000 * 60 * 60 * 24)
  );

  const totalPrice = days * room.price;

  return prisma.booking.create({
    data: {
      userId,
      roomId,
      checkIn,
      checkOut,
      totalPrice,
    },
    include: {
      room: true,
    },
  });
};

//read services 
export const getBookingByIdService = async (
  bookingId: number
) => {
  return prisma.booking.findUnique({
    where: { id: bookingId },
    include: {
      room: true,
      user: true,
    },
  });
};


//get all booking services 
export const getAllBookingsService = async () => {
  return prisma.booking.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      room: true,
      user: true,
    },
  });
};

//update booking
export const updateBookingService = async (
  bookingId: number,
  data: any
) => {
  return prisma.booking.update({
    where: {
      id: bookingId,
    },
    data,
  });
};

//delete booking
export const deleteBookingService = async (
  bookingId: number
) => {
  return prisma.booking.delete({
    where: {
      id: bookingId,
    },
  });
};

//delete multiple booking
export const deleteManyBookingsService = async (
  ids: number[]
) => {
  return prisma.booking.deleteMany({
    where: {
      id: {
        in: ids,
      },
    },
  });
};