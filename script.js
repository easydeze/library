let myLibrary = [];
const library = document.querySelector('.library');
const input = document.querySelector('.add');

input.addEventListener('click', togglePopup());

function popup() {
    
}

function Book(title, author, numpages, is_read) {
  this.title = title
  this.author = author
  this.numpages = numpages
  this.is_read = is_read
}

Book.prototype.changeRead = function () {
    this.read = !is_read
}

function addBookToLibrary(book) {
  myLibrary.push(book)
}

function displayBooks() {
    myLibrary.forEach((book) => {
        let title = document.createElement('p');
        title.innerHTML = "title: " + book.title;
        let author = document.createElement('p');
        author.innerHTML = "author: " + book.author;
        let numpages = document.createElement('p');
        numpages.innerHTML = "number of pages: " +book.numpages;
        let isread = document.createElement('p');
        isread.innerHTML = "has the book been read?: " + book.is_read;
        let display = document.createElement('display');
        display.appendChild(title);
        display.appendChild(author);
        display.appendChild(numpages);
        display.appendChild(isread);
        library.appendChild(display)
    })
}

temp1 = new Book("The Great Gatsby", "Tom Hanks", 100, true);
temp2 = new Book("Huckleberry Finn", "Martin Lockheed", 271, true);
temp3 = new Book("Tom Sawyer", "Danny Zhang", 342, true);

addBookToLibrary(temp1);
addBookToLibrary(temp2);
addBookToLibrary(temp3);

displayBooks();