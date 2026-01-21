const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Book",
  new mongoose.Schema({
    book_name: String,
    subject: String,
    publisher: String
  })
);
