const getBooksBtn = document.getElementById("getBooksBtn");

const booksList = document.getElementById("books-list");

const bookDetails = document.getElementById("book-details");


getBooksBtn.addEventListener("click", async () => {

    try {

        const response = await fetch("/api/books");

        const books = await response.json();

        booksList.innerHTML = "";

        bookDetails.innerHTML = "";

        books.forEach(book => {

            const item = document.createElement("div");

            item.className = "book-item";

            item.textContent =
                `${book.title} ${book.price} AUD`;

            item.addEventListener("click", () => {

                getBookDetails(book.id);
            });

            booksList.appendChild(item);
        });

    } catch (error) {

        booksList.innerHTML =
            "<p>Unable to retrieve books.</p>";
    }
});


async function getBookDetails(id) {

    try {

        const response =
            await fetch(`/api/books/${id}`);

        const book = await response.json();

        bookDetails.innerHTML = `
            <h2>Book Details</h2>

            <p>
                <strong>Title:</strong>
                ${book.title}
            </p>

            <p>
                <strong>Author:</strong>
                ${book.author}
            </p>

            <p>
                <strong>Year:</strong>
                ${book.year}
            </p>

            <p>
                <strong>Genre:</strong>
                ${book.genre}
            </p>

            <p>
                <strong>Summary:</strong>
                ${book.summary}
            </p>

            <p>
                <strong>Price (AUD):</strong>
                ${book.price}
            </p>
        `;

    } catch (error) {

        bookDetails.innerHTML =
            "<p>Unable to retrieve book details.</p>";
    }
}