const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Medium",
  new mongoose.Schema({ name: String })
);
