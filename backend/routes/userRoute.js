const express = require("express");

// Controller Functions
const { loginUser, registerUser } = require("../controllers/userController");

const router = express.Router();

// Login
router.post("/login", loginUser);

// Register
router.post("/register", registerUser);

module.exports = router;
