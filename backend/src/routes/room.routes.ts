import express from "express";
import {
  createRoom,
  deleteMultipleRooms,
  deleteRoom,
  readAllRooms,
  readRoom,
  updateRoom,
} from "../controllers/room.controller";
import { roomRateLimiter } from "../security/roomRateLimits";

const router = express.Router();

// CREATE room
router.post("/", roomRateLimiter,createRoom);

// GET all rooms
router.get("/", roomRateLimiter, readAllRooms);

// GET single room
router.get("/:id",roomRateLimiter,  readRoom);

// UPDATE room
router.put("/:id",  roomRateLimiter, updateRoom);

// DELETE single room
router.put("/:id",  roomRateLimiter, updateRoom);
router.delete("/:id",roomRateLimiter,  deleteRoom);

// DELETE multiple rooms
router.delete("/", roomRateLimiter, deleteMultipleRooms);

export default router;