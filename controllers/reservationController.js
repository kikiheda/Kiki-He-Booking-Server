// Get all reservations for a user
// reservations.controller.js
import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

// check if reservation exists
const checkReservationExists = async (reservationId) => {
  try {
    const reservationFound = await knex("reservations")
      .where({ reservationId })
      .first();
    if (!reservationFound) {
      return {
        success: false,
        message: `Reservation with ID ${reservationId} does not exist`,
      };
    }
    return { success: true, reservation: reservationFound };
  } catch (error) {
    console.error("Unable to check if reservation exists", error);
    return {
      success: false,
      error: "Unable to check if reservation exists",
    };
  }
};

// create reservation
export const createReservation = async (req, res) => {
  const { user_id, name, date, time, party_size, status } = req.body;

  try {
    // Insert the new reservation into the database
    const reservationId = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    const [insertedId] = await knex("reservations").insert({
      user_id,
      reservationId,
      name,
      date,
      time,
      party_size,
      status,
    });

    // Fetch the newly created reservation to return as a response
    const newReservation = await knex("reservations")
      .where("id", insertedId)
      .first();

    // Return the new reservation as a JSON response
    res.status(201).json({
      message: "Reservation created successfully",
      reservation: newReservation,
    });
  } catch (error) {
    console.error("Error creating reservation:", error);
    res.status(500).json({
      error: "Failed to create reservation",
    });
  }
};

// search reservation
export const searchReservation = async (req, res) => {
  try {
    console.log("req.params:", req.params); // Log route parameters

    const { id: reservationId } = req.params;

    // Query the database using Knex
    const results = await knex("reservations as r")
      .leftJoin("users as u", "r.user_id", "u.id")
      .select("u.name", "r.date", "r.time", "r.party_size")
      .where("r.reservationId", reservationId)
      .first();

    // Validate the inputs
    if (!reservationId) {
      return res.status(404).json({
        message: "Reservation with ID {reservationId} not found.",
      });
    }

    // Return the results
    return res.status(200).json(results);
  } catch (error) {
    console.error("Error searching for reservation:", error);
    return res.status(500).json({
      error: "An error occurred while searching for the reservation.",
    });
  }
};

// // Update a reservation
export const updateReservation = async (req, res) => {
  try {
    const { reservationId } = req.params;
    const { date, time, party_size } = req.body;

    // Debugging
    console.log("Update Reservation Request Data:", {
      id,
      date,
      time,
      party_size,
    });

    // Check if the reservation exists
    const reservation = await knex("reservations")
      .where({ reservationId })
      .first();


      if (!reservation) {
        return res.status(404).json({ error: "Reservation not found" });
      }

    // Update the reservation
   await knex("reservations")
     .where({ reservationId })
     .update({
       date: date || reservation.date,
       time: time || reservation.time,
       party_size: party_size || reservation.party_size,
       updated_at: knex.fn.now(), // Update the timestamp
     });

 
    // Retrieve the updated reservation
    const updatedReservation = await knex("reservations")
      .where({ reservationId })
      .first();

    res.status(200).json(updatedReservation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



// // Delete a reservation
export const deleteReservation = async (req, res) => {
  try {
    const { reservationId } = req.params;
    console.log("Received ID:", reservationId);

    const resFound = await checkReservationExists(reservationId);
    console.log("Reservation found:", resFound); // Debugging

    if (!resFound.success) {
      return res.status(404).json({ message: resFound.message });
    }

    const deletedRes = await knex("reservations")
      .where({ reservationId })
      .del();

    if (deletedRes) {
      return res.status(204).json({
        message: `Reservation with ID ${reservationId} has been deleted.`,
      });
    } else {
      return res.status(400).json({
        message: `Reservation with ID ${reservationId} could not be deleted.`,
      });
    }
  } catch (error) {
    console.error("Error deleting reservation", error);
    return res.status(500).json({
      success: false,
      error: `Failed attempt to delete reservation with ID ${req.params.reservationId}.`,
    });
  }
};