import express from "express";
import "dotenv/config";
import cors from "cors";

// Import routes
// import usersRoute from "./routes/users.js";
import reservationsRoute from "./routes/reservations.js";
// import menuRoute from "./routes/menu.js"; // Import the menu route
const PORT = process.env.PORT || 8080;



const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies

// Define routes
// app.use("/users", usersRoute);
app.use("/reservations", reservationsRoute);
// app.use("/menu", menuRoute); // Add the menu route

// Error handling middleware
app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(err.status || 500).json({
    error: {
      message: err.message,
    },
  });
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
