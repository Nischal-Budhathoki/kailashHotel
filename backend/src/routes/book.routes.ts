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
import { authenticate } from "../middleware/user.middleware.js";
import { roleMiddleware } from "../middleware/role.middleware.js";

const router = express.Router();

//crate-booking
router.post(
  "/",
  bookRateLimiter,
  authenticate,
  roleMiddleware(["USER"]),
  createBooking
);

//read-multiple-booking
router.get(
  "/",
  bookRateLimiter,
  authenticate,
  roleMiddleware(["ADMIN"]),
  readMultiple
);

//read-single-booking
router.get(
  "/:id",
  bookRateLimiter,
  authenticate,
  roleMiddleware(["USER", "ADMIN"]),
  readBooking
);

//update-booking
router.put(
  "/:id",
  bookRateLimiter,
  authenticate,
  roleMiddleware(["USER", "ADMIN"]),
  updateBooking
);

//delete-single-booking
router.delete(
  "/:id",
  bookRateLimiter,
  authenticate,
  roleMiddleware(["USER", "ADMIN"]),
  deleteBooking
);

//delete-multiple-booking
router.delete(
  "/",
  bookRateLimiter,
  authenticate,
  roleMiddleware(["ADMIN"]),
  deleteAllBooking
);

export default router;