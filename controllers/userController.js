// import knex from "../knexfile.js";

// // Get all users
// export const getUsers = async (req, res) => {
//   try {
//     const users = await knex("users").select("*");
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Create a new user
// export const createUser = async (req, res) => {
//   try {
//     const { name, email, phone } = req.body;
//     const [user] = await knex("users")
//       .insert({ name, email, phone })
//       .returning("*");
//     res.status(201).json(user);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Update a user
// export const updateUser = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name, email, phone } = req.body;
//     const [user] = await knex("users")
//       .where({ id })
//       .update({ name, email, phone })
//       .returning("*");
//     res.status(200).json(user);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // Delete a user
// export const deleteUser = async (req, res) => {
//   try {
//     const { id } = req.params;
//     await knex("users").where({ id }).del();
//     res.status(204).send();
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
