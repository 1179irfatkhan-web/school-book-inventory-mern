const mongoose = require("mongoose");

module.exports = mongoose.model(
  "BookSetItem",
  new mongoose.Schema({
    book_set_id: { type: mongoose.Schema.Types.ObjectId, ref: "BookSet" },
    book_id: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
    quantity: Number
  })
);
