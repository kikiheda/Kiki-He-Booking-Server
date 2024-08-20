import express from "express";
import * as reservationController from "../controllers/reservationController.js";
const router = express.Router();


// Create a new reservation
router.route("/create")
.post(reservationController.createReservation);


// Modification
router.route("/:id")
.get(reservationController.searchReservation) // find reservation
.put(reservationController.updateReservation)
.delete(reservationController.deleteReservation)



export default router;
