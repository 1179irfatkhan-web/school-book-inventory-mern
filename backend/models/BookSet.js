const mongoose = require("mongoose");

module.exports = mongoose.model(
  "BookSet",
  new mongoose.Schema(
    {
      board_id: { type: mongoose.Schema.Types.ObjectId, ref: "Board" },
      medium_id: { type: mongoose.Schema.Types.ObjectId, ref: "Medium" },
      class_id: { type: mongoose.Schema.Types.ObjectId, ref: "Class" },
      year_id: { type: mongoose.Schema.Types.ObjectId, ref: "AcademicYear" },
      set_name: String
    },
    { timestamps: true }
  )
);
