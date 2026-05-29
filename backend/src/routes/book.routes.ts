import express from "express";
import {
  createBooking,
  readBooking,
  readMultiple,
  updateBooking,
  deleteBooking,
  deleteAllBooking,
} from "../controllers/book.controller.js";

const router = express.Router();

//crate-booking
router.post("/", createBooking);

//read-multiple-booking
router.get("/", readMultiple);

//read-single-booking
router.get("/:id", readBooking);

//update-booking
router.put("/:id", updateBooking);

//delete-single-booking
router.delete("/:id", deleteBooking);

//delete-multiple-booking
router.delete("/", deleteAllBooking);

export default router;