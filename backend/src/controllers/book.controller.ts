import { NextFunction, Request, Response } from "express";
import { bookingIdSchema, createBookingSchema, deleteBookingsSchema } from "../zodValidation/bookingValidation";
import { success } from "zod";
import { prisma } from "../config/prisma";
import { updateBookingSchema } from "../zodValidation/updateSchemaValidation";

//create-booking
export const createBooking = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // 1. Validate input
    const result = createBookingSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid booking data",
        error: result.error.flatten(),
      });
    }

    const { userId, roomId, checkIn, checkOut, status } = result.data;

    // 2. Check room exists
    const room = await prisma.room.findUnique({
      where: { id: roomId },
    });

    if (!room) {
      return res.status(404).json({
        success: false,
        message: "Room not found",
      });
    }

    // 3. Check room availability
    if (!room.isAvailable) {
      return res.status(409).json({
        success: false,
        message: "Room is not available",
      });
    }

    // 4. Create booking
    const booking = await prisma.booking.create({
      data: {
        userId,
        roomId,
        checkIn,
        checkOut,
        status
      },
    });

    return res.status(201).json({
      success: true,
      message: "Room booked successfully",
      data: booking,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

//read-single-room-booking
export const readBooking = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // validate params
    const result = bookingIdSchema.safeParse(req.params);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid booking id",
        error: result.error.flatten(),
      });
    }

    const bookingId = result.data.id;

    // find booking
    const booking = await prisma.booking.findUnique({
      where: { id: bookingId },
    });

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Booking fetched successfully",
      data: booking,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

//read-multiple-booking
export const readMultiple = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // fetch all bookings
    const bookings = await prisma.booking.findMany();

    //all-sucess
    return res.status(200).json({
      success: true,
      message: "Bookings fetched successfully",
      data: bookings,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

//update-booking
export const updateBooking = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // validate id
    const bookingId = Number(req.params.id);

    if (isNaN(bookingId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid booking id",
      });
    }

    // validate body
    const result = updateBookingSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid update data",
        error: result.error.flatten(),
      });
    }

    // update booking
    const updatedBooking = await prisma.booking.update({
      where: {
        id: bookingId,
      },
      data: result.data,
    });

    return res.status(200).json({
      success: true,
      message: "Booking updated successfully",
      data: updatedBooking,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


//delete-booking
export const deleteBooking = async(
  req:Request,
  res:Response,
  next:NextFunction
)=>{
  try {
      //validation pulling
      const result = bookingIdSchema.safeParse(req.params);

      //if fails
      if(!result.success){
        return res.status(400).json({
          success:false,
          message:"Failed to get the records",
          error:result.error.flatten(),
        })
      }

      //pulling the records now
      const bookingId = result.data.id;

         // check booking exists
    const existingBooking = await prisma.booking.findUnique({
      where: { id: bookingId },
    });

    //if booking fails
     if (!existingBooking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

     // delete booking
    const deletedBooking = await prisma.booking.delete({
      where: { id: bookingId },
    });

      //if deleted fails
      if(!existingBooking){
        return res.status(404).json({
          success:false,
          message:"Records not found to be deleted",
        })
      };

      //all sucess then
      return res.status(201).json({
        success:true,
        message:"Booking Deleted successfully !!!",
        data:deleteBooking,
      })




  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

//delete-multiple-booking
export const deleteAllBooking = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // validate body
    const result = deleteBookingsSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid booking ids",
        error: result.error.flatten(),
      });
    }

    const { ids } = result.data;

    // delete many
    const deleted = await prisma.booking.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });

    return res.status(200).json({
      success: true,
      message: "Bookings deleted successfully",
      count: deleted.count,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};