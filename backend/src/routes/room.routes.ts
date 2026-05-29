import express from "express";
import {
  createRoom,
  deleteMultipleRooms,
  deleteRoom,
  readAllRooms,
  readRoom,
  updateRoom,
} from "../controllers/room.controller";

const router = express.Router();

// CREATE room
router.post("/", createRoom);

// GET all rooms
router.get("/", readAllRooms);

// GET single room
router.get("/:id", readRoom);

// UPDATE room
router.put("/:id", updateRoom);

// DELETE single room
router.delete("/:id", deleteRoom);

// DELETE multiple rooms
router.delete("/", deleteMultipleRooms);

export default router;