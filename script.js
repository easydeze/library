//REFERENCES TO HTML
let myLibrary = [];
let isFormOpen = false;
const library = document.querySelector('.library');
const input = document.querySelector('.add');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay')
const submit = document.getElementById('form')

//POPUP FORM
input.addEventListener('click', () => {
  if (modal.classList.contains('active')) {
    modal.classList.remove('active');
    overlay.classList.remove('active');
  }
  else {
    modal.classList.add('active');
    overlay.classList.add('active');
  }
})

//Book, library functions and constructors
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
        numpages.innerHTML = "number of pages: " + book.numpages;
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

function populateBook() {
  const title = document.getElementById('inputTitle').value;
  const author = document.getElementById('inputAuthor').value;
  const pages = document.getElementById('inputPages').value;
  const read = document.getElementById('read').checked;
  console.log(title);
  return new Book(title, author, pages, read);
}

function addBook(e) {
  e.preventDefault();
  const tempBook = populateBook();
  addBookToLibrary(tempBook);
  library.replaceChildren();
  displayBooks();
}

submit.addEventListener('submit', addBook);