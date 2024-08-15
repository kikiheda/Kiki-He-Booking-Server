import express from "express";
import {
  getReservations,
  createReservation,
  updateReservation,
  deleteReservation,
} from "../controllers/reservationController.js";

const router = express.Router();

// Get all reservations for a user
router.get("/", getReservations);

// Create a new reservation
router.post("/", createReservation);

// Update a reservation
router.put("/:id", updateReservation);

// Cancel a reservation
router.delete("/:id", deleteReservation);

export default router;
