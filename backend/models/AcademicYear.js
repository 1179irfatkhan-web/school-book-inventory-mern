const mongoose = require("mongoose");

module.exports = mongoose.model(
  "AcademicYear",
  new mongoose.Schema({ year_label: String })
);
