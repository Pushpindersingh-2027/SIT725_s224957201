const express = require("express");

const router = express.Router();

const booksController = require("../controllers/books.controller");

// GET all books
router.get("/", booksController.getAllBooks);

// GET one book by ID
router.get("/:id", booksController.getBookById);

module.exports = router;