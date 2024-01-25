const mongoose = require("mongoose");

const notesSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Cannot leave empty"],
    },
    message: {
      type: String,
      required: [true, "Cannot leave empty"],
    },
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Notes = mongoose.model("Notes", notesSchema);

module.exports = Notes;
