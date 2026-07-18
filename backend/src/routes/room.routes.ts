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
import { authenticate } from "../middleware/user.middleware";
import { roleMiddleware } from "../middleware/role.middleware";

const router = express.Router();

// PUBLIC ROUTES
router.get("/", roomRateLimiter, readAllRooms);
router.get("/:id", roomRateLimiter, readRoom);

// ADMIN ROUTES
router.post(
  "/",
  roomRateLimiter,
  authenticate,
  roleMiddleware(["ADMIN"]),
  createRoom
);

router.put(
  "/:id",
  roomRateLimiter,
  authenticate,
  roleMiddleware(["ADMIN"]),
  updateRoom
);

router.delete(
  "/:id",
  roomRateLimiter,
  authenticate,
  roleMiddleware(["ADMIN"]),
  deleteRoom
);

router.delete(
  "/",
  roomRateLimiter,
  authenticate,
  roleMiddleware(["ADMIN"]),
  deleteMultipleRooms
);

export default router;