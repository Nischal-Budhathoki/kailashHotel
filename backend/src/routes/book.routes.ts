import express from "express";
import {
  createBooking,
  readBooking,
  readMultiple,
  updateBooking,
  deleteBooking,
  deleteAllBooking,
} from "../controllers/book.controller.js";
import { bookRateLimiter } from "../security/bookRateLimits.js";
import { authMiddleware } from "../middleware/userMiddleware.js";
import { roleMiddleware } from "../middleware/role.middleware.js";

const router = express.Router();

//crate-booking
router.post(
  "/",
  bookRateLimiter,
  authMiddleware,
  roleMiddleware(["USER"]),
  createBooking
);

//read-multiple-booking
router.get(
  "/",
  bookRateLimiter,
  authMiddleware,
  roleMiddleware(["ADMIN"]),
  readMultiple
);

//read-single-booking
router.get(
  "/:id",
  bookRateLimiter,
  authMiddleware,
  roleMiddleware(["USER", "ADMIN"]),
  readBooking
);

//update-booking
router.put(
  "/:id",
  bookRateLimiter,
  authMiddleware,
  roleMiddleware(["USER", "ADMIN"]),
  updateBooking
);

//delete-single-booking
router.delete(
  "/:id",
  bookRateLimiter,
  authMiddleware,
  roleMiddleware(["USER", "ADMIN"]),
  deleteBooking
);

//delete-multiple-booking
router.delete(
  "/",
  bookRateLimiter,
  authMiddleware,
  roleMiddleware(["ADMIN"]),
  deleteAllBooking
);

export default router;