const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Class",
  new mongoose.Schema({ class_number: Number })
);
