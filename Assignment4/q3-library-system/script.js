class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isIssued = false; // every new book starts as available
  }

  issueBook() {
    if (this.isIssued) {
      return false; // already taken
    }
    this.isIssued = true;
    return true;
  }

  returnBook() {
    this.isIssued = false;
  }
}

const books = [
  new Book("Clean Code", "Robert Martin", "111"),
  new Book("The Pragmatic Programmer", "Andrew Hunt", "222"),
  new Book("JavaScript: The Good Parts", "Douglas Crockford", "333"),
  new Book("Eloquent JavaScript", "Marijn Haverbeke", "444")
];

// Show only the books that are not issued
function showAvailableBooks() {
  const list = document.getElementById("bookList");
  list.innerHTML = "";

  books.filter(function (book) {
    return !book.isIssued;
  }).forEach(function (book) {
    const item = document.createElement("li");
    item.textContent = `${book.title} by ${book.author} (ISBN: ${book.isbn})`;
    list.appendChild(item);
  });
}

document.getElementById("issueBtn").addEventListener("click", function () {
  const isbn = document.getElementById("isbnInput").value.trim();
  const message = document.getElementById("message");

  // Search the book by ISBN
  const foundBook = books.find(function (book) {
    return book.isbn === isbn;
  });

  if (!foundBook) {
    message.textContent = "No book found with that ISBN.";
  } else if (!foundBook.issueBook()) {
    message.textContent = `"${foundBook.title}" is already issued.`;
  } else {
    message.textContent = `You issued "${foundBook.title}".`;
  }
  showAvailableBooks();
});

showAvailableBooks();
