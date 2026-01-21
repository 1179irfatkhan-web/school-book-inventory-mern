const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Board",
  new mongoose.Schema({ name: String })
);
