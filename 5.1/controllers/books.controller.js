const booksService = require("../services/books.service");

// Get all books
const getAllBooks = (req, res) => {
    const books = booksService.getAllBooks();

    res.status(200).json(books);
};

// Get a single book by ID
const getBookById = (req, res) => {
    const book = booksService.getBookById(req.params.id);

    if (!book) {
        return res.status(404).json({
            message: "Book not found"
        });
    }

    res.status(200).json(book);
};

module.exports = {
    getAllBooks,
    getBookById
};