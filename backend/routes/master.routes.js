const express = require("express");
const router = express.Router();

const Board = require("../models/Board");
const Medium = require("../models/Medium");
const ClassModel = require("../models/Class");
const AcademicYear = require("../models/AcademicYear");
const Book = require("../models/Book");

/* CREATE */
router.post("/board", async (req, res) => res.json(await Board.create(req.body)));
router.post("/medium", async (req, res) => res.json(await Medium.create(req.body)));
router.post("/class", async (req, res) => res.json(await ClassModel.create(req.body)));
router.post("/year", async (req, res) => res.json(await AcademicYear.create(req.body)));
router.post("/book", async (req, res) => res.json(await Book.create(req.body)));

/* READ (FOR DROPDOWNS) */
router.get("/board", async (req, res) => res.json(await Board.find()));
router.get("/medium", async (req, res) => res.json(await Medium.find()));
router.get("/class", async (req, res) => res.json(await ClassModel.find()));
router.get("/year", async (req, res) => res.json(await AcademicYear.find()));
router.get("/book", async (req, res) => res.json(await Book.find()));

module.exports = router;
