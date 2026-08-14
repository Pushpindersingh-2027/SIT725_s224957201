document.addEventListener("DOMContentLoaded", () => {

    const booksList = document.getElementById("books-list");

    // Fetch all books from the API
    fetch("/api/books")
        .then(response => {

            if (!response.ok) {
                throw new Error("Unable to retrieve books");
            }

            return response.json();
        })

        .then(books => {

            booksList.innerHTML = "";

            books.forEach(book => {

                const bookCard = document.createElement("div");

                bookCard.className = "book-card";

                bookCard.innerHTML = `
                    <div class="book-id">${book.id}</div>

                    <h3>${book.title}</h3>

                    <p class="author">
                        <strong>Author:</strong> ${book.author}
                    </p>
                `;

                booksList.appendChild(bookCard);
            });
        })

        .catch(error => {

            console.error("Error:", error);

            booksList.innerHTML = `
                <p class="error-message">
                    Unable to load books.
                </p>
            `;
        });

});