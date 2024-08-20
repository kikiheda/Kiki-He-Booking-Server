// // controllers/availabilityController.js
// import initKnex from "knex";
// import configuration from "../knexfile.js";
// const knex = initKnex(configuration);

// export const checkAvailability = async (req, res) => {
//   const { date, time } = req.query;

//   try {
//     const availability = await knex('availability')
//       .where({ date, time })
//       .first();

//     if (!availability) {
//       return res.status(200).json({ is_available: false });
//     }

//     res.status(200).json({ is_available: availability.is_available });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };