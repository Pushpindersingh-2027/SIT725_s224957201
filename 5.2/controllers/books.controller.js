const booksService = require("../services/books.service");

const getAllBooks = async (req, res) => {

    try {

        const books = await booksService.getAllBooks();

        const formattedBooks = books.map(book => ({
            id: book.id,
            title: book.title,
            author: book.author,
            year: book.year,
            genre: book.genre,
            summary: book.summary,
            price: book.price.toString()
        }));

        res.status(200).json(formattedBooks);

    } catch (error) {

        res.status(500).json({
            message: "Error retrieving books"
        });
    }
};


const getBookById = async (req, res) => {

    try {

        const book = await booksService.getBookById(req.params.id);

        if (!book) {

            return res.status(404).json({
                message: "Book not found"
            });
        }

        const formattedBook = {
            id: book.id,
            title: book.title,
            author: book.author,
            year: book.year,
            genre: book.genre,
            summary: book.summary,
            price: book.price.toString()
        };

        res.status(200).json(formattedBook);

    } catch (error) {

        res.status(500).json({
            message: "Error retrieving book"
        });
    }
};

module.exports = {
    getAllBooks,
    getBookById
};