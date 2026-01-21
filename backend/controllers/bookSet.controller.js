const BookSet = require("../models/BookSet");
const BookSetItem = require("../models/BookSetItem");

exports.createBookSet = async (req, res) => {
  const { board_id, medium_id, class_id, year_id, set_name, books } = req.body;

  const bookSet = await BookSet.create({
    board_id,
    medium_id,
    class_id,
    year_id,
    set_name
  });

  const items = books.map(b => ({
    book_set_id: bookSet._id,
    book_id: b.book_id,
    quantity: b.quantity
  }));

  await BookSetItem.insertMany(items);
  res.json({ message: "Book Set Created", bookSet });
};

exports.getBookSets = async (req, res) => {
  const filter = req.query;

  // 1. Get book sets with master data
  const sets = await BookSet.find(filter)
    .populate("board_id medium_id class_id year_id")
    .lean(); // IMPORTANT

  // 2. Get books for each set
  for (let set of sets) {
    const items = await BookSetItem.find({ book_set_id: set._id })
      .populate("book_id");

    set.books = items.map(i => ({
      book_id: i.book_id._id,
      book_name: i.book_id.book_name,
      subject: i.book_id.subject,
      publisher: i.book_id.publisher,
      quantity: i.quantity
    }));
  }

  res.json(sets);
};

exports.updateBookSet = async (req, res) => {
  const { books, ...data } = req.body;

  await BookSet.findByIdAndUpdate(req.params.id, data);
  await BookSetItem.deleteMany({ book_set_id: req.params.id });

  const items = books.map(b => ({
    book_set_id: req.params.id,
    book_id: b.book_id,
    quantity: b.quantity
  }));

  await BookSetItem.insertMany(items);
  res.json({ message: "Updated Successfully" });
};

exports.deleteBookSet = async (req, res) => {
  await BookSetItem.deleteMany({ book_set_id: req.params.id });
  await BookSet.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted Successfully" });
};
