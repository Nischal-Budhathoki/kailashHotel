import { Request, Response } from "express";

import {
  bookingIdSchema,
  createBookingSchema,
  deleteBookingsSchema,
} from "../zodValidation/bookingValidation";

import { updateBookingSchema } from "../zodValidation/updateSchemaValidation";

import {
  createBookingService,
  getBookingByIdService,
  getAllBookingsService,
  updateBookingService,
  deleteBookingService,
  deleteManyBookingsService,
} from "../services/booking.service";


// CREATE BOOKING
export const createBooking = async (
  req: Request,
  res: Response
) => {
  try {
    const result = createBookingSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid booking data",
        error: result.error.flatten(),
      });
    }

    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const booking = await createBookingService({
      userId: Number(userId),
      roomId: result.data.roomId,
      checkIn: new Date(result.data.checkIn),
      checkOut: new Date(result.data.checkOut),
    });

    return res.status(201).json({
      success: true,
      message: "Room booked successfully",
      data: booking,
    });

  } catch (error: any) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


// READ SINGLE BOOKING
export const readBooking = async (
  req: Request,
  res: Response
) => {
  try {
    const result = bookingIdSchema.safeParse(req.params);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid booking id",
        error: result.error.flatten(),
      });
    }

    const booking = await getBookingByIdService(
      result.data.id
    );

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

  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// READ ALL BOOKINGS
export const readMultiple = async (
  req: Request,
  res: Response
) => {
  try {
    const bookings = await getAllBookingsService();

    return res.status(200).json({
      success: true,
      message: "Bookings fetched successfully",
      data: bookings,
    });

  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// UPDATE BOOKING
export const updateBooking = async (
  req: Request,
  res: Response
) => {
  try {
    const bookingId = Number(req.params.id);

    if (isNaN(bookingId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid booking id",
      });
    }

    const result = updateBookingSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid update data",
        error: result.error.flatten(),
      });
    }

    const booking = await updateBookingService(
      bookingId,
      result.data
    );

    return res.status(200).json({
      success: true,
      message: "Booking updated successfully",
      data: booking,
    });

  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// DELETE SINGLE BOOKING
export const deleteBooking = async (
  req: Request,
  res: Response
) => {
  try {
    const result = bookingIdSchema.safeParse(req.params);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid booking id",
        error: result.error.flatten(),
      });
    }

    const deletedBooking =
      await deleteBookingService(result.data.id);

    return res.status(200).json({
      success: true,
      message: "Booking deleted successfully",
      data: deletedBooking,
    });

  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// DELETE MULTIPLE BOOKINGS
export const deleteAllBooking = async (
  req: Request,
  res: Response
) => {
  try {
    const result =
      deleteBookingsSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid booking ids",
        error: result.error.flatten(),
      });
    }

    const deleted =
      await deleteManyBookingsService(
        result.data.ids
      );

    return res.status(200).json({
      success: true,
      message: "Bookings deleted successfully",
      count: deleted.count,
    });

  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};