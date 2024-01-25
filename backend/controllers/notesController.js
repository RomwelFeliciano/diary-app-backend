const Notes = require("../models/notesModel");

// Create a Note
const createNote = async (req, res) => {
  try {
    const user_id = req.user._id;

    const note = await Notes.create({ ...req.body, user_id });
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }

  // console.log(req.body);
  // res.send("Note Created");
};

// Get All Note
const getAllNotes = async (req, res) => {
  try {
    const user_id = req.user._id;

    const notes = await Notes.find({ user_id }).sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Get a Single Note
const getSingleNotes = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Notes.findById(id);

    if (!note) {
      return res.status(404).json(`No Notes with ID: ${id}`);
    }

    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Delete a Note
const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Notes.findByIdAndDelete(id);

    if (!note) {
      return res.status(404).json(`No Notes with ID: ${id}`);
    }

    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Update a Note
const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Notes.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    });

    if (!note) {
      return res.status(404).json(`No Notes with ID: ${id}`);
    }

    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  createNote,
  getAllNotes,
  getSingleNotes,
  deleteNote,
  updateNote,
};
