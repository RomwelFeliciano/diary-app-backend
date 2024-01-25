const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const notesRoute = require("./routes/notesRoute");
const userRoute = require("./routes/userRoute");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "https://diary-app-cv6f.onrender.com"],
  })
);
app.use("/api/notes", notesRoute);
app.use("/api/user", userRoute);

// Routes
app.get("/", (req, res) => {
  // Check to test GET
  res.send("Home Page");
});

// Creating a dynamic PORT
const PORT = process.env.PORT || 5000;

// Connect to Database then Listen and check if error
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening on Port ${PORT}...`);
    });
  })
  .catch((error) => console.log(error));
