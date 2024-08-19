// Get all reservations for a user
// reservations.controller.js
import initKnex from "knex";
import configuration from "../knexfile.js";
const knex = initKnex(configuration);

export const getReservations = async (req, res) => {
  try {
    const { user_id, bookedSlots } = req.query; // Assume bookedSlots is passed as a query parameter
    
    // Convert bookedSlots to an array if it's passed as a string
    const slotsArray = bookedSlots ? bookedSlots.split(',') : [];

    // Fetch reservations based on user_id, time, and active status
    const reservations = await knex("reservations")
      .where({ user_id })
      .whereIn("time", slotsArray) // Assuming `time` is the column name for the reservation time
      .andWhere("status", "active"); // Assuming `status` is the column name for the reservation status
    
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const createReservation = async (req, res) => {
  const { user_id, name, date, time, party_size, status } = req.body;

  try {
    // Insert the new reservation into the database
    const [insertedId] = await knex('reservations').insert({
      user_id,
      name,
      date,
      time,
      party_size,
      status,
    });

    // Fetch the newly created reservation to return as a response
    const newReservation = await knex('reservations').where('id', insertedId).first();

    // Return the new reservation as a JSON response
    res.status(201).json({
      message: 'Reservation created successfully',
      reservation: newReservation,
    });
  } catch (error) {
    console.error('Error creating reservation:', error);
    res.status(500).json({
      error: 'Failed to create reservation',
    });
  }
};

// Update a reservation
export const updateReservation = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, date, time, party_size } = req.body;
    const [reservation] = await knex("reservations")
      .where({ id })
      .update({ name, date, time, party_size })
      .returning("*");
    res.status(200).json(reservation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Cancel a reservation
export const deleteReservation = async (req, res) => {
  try {
    const { id } = req.params;

    // Start a transaction
    await knex.transaction(async (trx) => {
      // Get the reservation details first
      const reservation = await trx("reservations").where({ id }).first();

      if (!reservation) {
        return res.status(404).json({ error: "Reservation not found" });
      }

      // Delete the reservation
      await trx("reservations").where({ id }).del();

      // Update availability (increment available seats)
      await trx("availability")
        .where({ date: reservation.date, time: reservation.time })
        .increment("available_seats", reservation.party_size);

      res.status(204).send();
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

