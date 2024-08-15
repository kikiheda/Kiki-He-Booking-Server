import express from "express";
import "dotenv/config";
import cors from "cors";

// Import routes
import usersRoute from "./routes/users.js";
import reservationsRoute from "./routes/reservations.js";
// import generalRoute from "./routes/general.js";

const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies

// Define routes
app.use("/users", usersRoute);
app.use("/reservations", reservationsRoute);
// app.use("/", generalRoute);

// Error handling middleware (optional)
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: {
      message: err.message,
    },
  });
});

// Start the server
const PORT = process.env.port || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
