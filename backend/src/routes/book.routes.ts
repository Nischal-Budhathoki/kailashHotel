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

const router = express.Router();

//crate-booking
router.post("/",bookRateLimiter, createBooking);

//read-multiple-booking
router.get("/", bookRateLimiter,readMultiple);

//read-single-booking
router.get("/:id", bookRateLimiter,readBooking);

//update-booking
router.put("/:id", bookRateLimiter,updateBooking);

//delete-single-booking
router.delete("/:id", bookRateLimiter,deleteBooking);

//delete-multiple-booking
router.delete("/", bookRateLimiter,deleteAllBooking);

export default router;