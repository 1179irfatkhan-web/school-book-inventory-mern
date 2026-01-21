📘 School Book Inventory Management (MERN)
📌 Project Overview

This project manages school book inventory by creating Book Sets based on Board, Medium, Class, Academic Year, and Books. It helps standardize book distribution and supports syllabus changes across years.

🧩 Database Design Explanation
Why relational design in MongoDB?

Although MongoDB is NoSQL, the project follows relational principles to ensure data integrity, scalability, and reuse of entities.

Entities

Board

Medium

Class

AcademicYear

Book

BookSet

BookSetItem

Why separate BookSet and BookSetItem?

A Book Set can contain multiple books, and the same book can appear in multiple sets. A junction collection avoids duplication and allows quantity management per book.

🔄 CRUD Operations
Create

Create master entities (Board, Medium, Class, Year, Book)

Create Book Sets with multiple books and quantities

Read

Fetch Book Sets with filters

Populate master references

Fetch related books using BookSetItem

Update

Update Book Set metadata

Replace book list to maintain consistency

Delete

Delete Book Set and related BookSetItems to avoid orphan records

🖥 Admin Panel UI
Features

Master data management via reusable forms

Dropdown-based selection (no manual ObjectId entry)

Clean and minimal admin UI

Book Set listing with populated relational data

⚙️ Tech Stack

Backend: Node.js, Express.js, MongoDB, Mongoose

Frontend: React, Axios

Tools: Postman, MongoDB Compass

▶️ How to Run Locally
Backend
cd backend
npm install
npm run dev


Create .env:

MONGO_URI=your_mongodb_connection_string
PORT=5000

Frontend
cd admin-panel
npm install
npm start

🧠 Interview Q&A
Q: Why use MongoDB ObjectId instead of numeric IDs?

A: ObjectIds provide global uniqueness, avoid race conditions, and work well in distributed systems.

Q: How are books fetched for a Book Set?

A: Books are stored in a separate BookSetItem collection and populated explicitly when fetching Book Sets.

Q: How is data integrity maintained?

A: Through reference-based schemas and cascading deletes during update and delete operations.

📌 Conclusion

This project demonstrates clean MERN architecture, proper data modeling, and real-world admin workflows. It is designed to be scalable and easily extendable.
