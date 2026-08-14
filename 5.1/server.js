const express = require("express");
const path = require("path");

const booksRoutes = require("./routes/books.routes");

const app = express();

const PORT = 3000;

// Allow JSON
app.use(express.json());

// Serve frontend files from public folder
app.use(express.static(path.join(__dirname, "public")));

// Books API
app.use("/api/books", booksRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Books MVC application running at http://localhost:${PORT}`);
});