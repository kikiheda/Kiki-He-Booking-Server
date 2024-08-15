import knex from "../knexfile.js";

// Get all reservations for a user
// reservations.controller.js

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


// Create a new reservation
export const createReservation = async (req, res) => {
  try {
    const { user_id, name, date, time, party_size } = req.body;
    const [reservation] = await knex("reservations")
      .insert({ user_id, name, date, time, party_size })
      .returning("*");
    res.status(201).json(reservation);
  } catch (error) {
    res.status(500).json({ error: error.message });
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
    await knex("reservations").where({ id }).del();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
