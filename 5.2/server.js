const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const booksRoutes = require("./routes/books.routes");

const app = express();

const PORT = 3000;

// MongoDB URI hardcoded as required by the task
const mongoURI = "mongodb://localhost:27017/booksCatalog";

mongoose.connect(mongoURI)
    .then(() => {
        console.log("Connected to MongoDB - booksCatalog");
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
    });

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/api/books", booksRoutes);

app.listen(PORT, () => {

    console.log(`Books MVC application running at http://localhost:${PORT}`);
});