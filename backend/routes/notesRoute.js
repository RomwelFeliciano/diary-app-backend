const express = require("express");
const requireAuth = require("../middleware/requireAuth");
const {
  createNote,
  getAllNotes,
  getSingleNotes,
  deleteNote,
  updateNote,
} = require("../controllers/notesController");

const router = express.Router();

// Require Auth for all note routes
router.use(requireAuth);

// Create a Note
router.post("/", createNote);

// Get All Note
router.get("/", getAllNotes);

// Get a Single Note
router.get("/:id", getSingleNotes);

// Delete a Note
router.delete("/:id", deleteNote);

// Update a Note
router.put("/:id", updateNote);

module.exports = router;
