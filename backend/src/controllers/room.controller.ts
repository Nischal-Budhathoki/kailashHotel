import { NextFunction, Request, Response } from "express";
import { createRoomSchema } from "../zodValidation/roomValidation";
import { prisma } from "../config/prisma";
import { success } from "zod";
import { deleteRoomsSchema, roomIdSchema } from "../zodValidation/roomIdValidation";
import { error } from "node:console";

//creating-room
export const createRoom = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    //getting data from zod-validation
    const result = createRoomSchema.safeParse(req.body);

    //if result not recieved,
    if (!result.success) {
      return res.status(409).json({
        success: false,
        message: "Room Assigned not received",
        error: result.error.flatten(),
      });
    }

    const { roomNumber, price, type, isAvailable } = result.data;
    //creating, room
    const room = await prisma.room.create({
      data: {
        roomNumber,
        price,
        type,
        //only send if exists
        ...(isAvailable !== undefined && { isAvailable }),
      },
    });

    //if room exists then
    if (!room) {
      return res.status(409).json({
        success: false,
        message: "Room is already Taken, try another room !",
      });
    }
    //if all sucess
    return res.status(201).json({
      success: true,
      message: "Room created successfully",
      data: room,
    });
  } catch (error) {
    if (typeof error === "object" && error !== null && "code" in error) {
      const prismaError = error as { code: string };

      if (prismaError.code === "P2002") {
        return res.status(409).json({
          success: false,
          message: "Room number already exists",
        });
      }
    }

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

//reading single room
export const readRoom = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // validate params
    const result = roomIdSchema.safeParse(req.params);

    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid room id",
        error: result.error.flatten(),
      });
    }

    const roomId = result.data.id;

    // find room
    const room = await prisma.room.findUnique({
      where: {
        roomNumber: roomId,
      },
    });

    if (!room) {
      return res.status(404).json({
        success: false,
        message: "Room not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: room,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

//reading-all-room
export const readAllRooms = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const rooms = await prisma.room.findMany();

    return res.status(200).json({
      success: true,
      message: "Rooms fetched successfully",
      data: rooms,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

//updating-room
export const updateRoom = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // validate params
    const result = roomIdSchema.safeParse(req.params);

    //if validation fails
    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid room id",
        error: result.error.flatten(),
      });
    }
    //getting id
    const roomId = result.data.id;

    // check if room exists
    const existingRoom = await prisma.room.findUnique({
      where: { id: roomId },
    });

    if (!existingRoom) {
      return res.status(404).json({
        success: false,
        message: "Room not found",
      });
    }

    // update room
    const updatedRoom = await prisma.room.update({
      where: { id: roomId },
      data: req.body,
    });

    return res.status(200).json({
      success: true,
      message: "Room updated successfully",
      data: updatedRoom,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

//delete-room
export const deleteRoom = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    //validation from id room schema
    const result = roomIdSchema.safeParse(req.params);

    //if validation fails
    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: "Data not found to be deleted, try again !!!",
        error: result.error.flatten(),
      });
    }

    const roomId = result.data.id;

    //check if existing room
    const existingRoom = await prisma.room.findUnique({
      where: { id: roomId },
    });

    //if existing room,
    if (!existingRoom) {
      return res.status(404).json({
        success: false,
        message: "Room not found",
      });
    }

    //delete room
    await prisma.room.delete({
      where: { id: roomId },
    });

    //if all sucess
    return res.status(201).json({
      success: true,
      message: "Data room deleted succesfully !!!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

//delete-multiple-room
export const deleteMultipleRooms = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    //get validation
    const result = deleteRoomsSchema.safeParse(req.params);

    //if fails validation
    if (!result.success) {
      return res.status(400).json({
        success: false,
        message: "Room Validation fails",
        error: result.error.flatten(),
      });
    }

    //getting value
    const { ids } = result.data;

    //getting record
    const deleted = await prisma.room.deleteMany({
      where: { 
        id: {
            in:ids
        }
      },
    });

    //if all sucess
    return res.status(201).json({
      success: true,
      message: "Multiple recorded room deleted succesffully !!!",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
