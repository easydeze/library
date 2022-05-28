//REFERENCES TO HTML
let myLibrary = [];
let isFormOpen = false;
const library = document.querySelector('.library');
const input = document.querySelector('.add');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay')
const submit = document.getElementById('form')

submit.addEventListener('submit', addBook);


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
function Book(title, author, numpages, is_read, pos) {
  this.title = title
  this.author = author
  this.numpages = numpages
  this.is_read = is_read
  this.pos = pos
}

Book.prototype.changeRead = function () {
  this.read = !is_read
}

function addBookToLibrary(book) {
  myLibrary.push(book)
}

function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
        let title = document.createElement('p');
        title.innerHTML = "title: " + myLibrary[i].title;
        title.id = i;

        let author = document.createElement('p');
        author.innerHTML = "author: " + myLibrary[i].author;
        author.id = i;

        let numpages = document.createElement('p');
        numpages.innerHTML = "number of pages: " + myLibrary[i].numpages;
        numpages.id = i;

        let isread = document.createElement('p');
        isread.innerHTML = "has the book been read?: " + myLibrary[i].is_read;
        isread.id = i;

        let remove = document.createElement('button');
        remove.classList.add('remove');
        remove.innerHTML = "REMOVE";
        remove.id = i;
        remove.addEventListener('click', () => {
          removeBook(i);
        });

        let readStatus = document.createElement('button');
        readStatus.innerHTML = myLibrary[i].is_read;
        console.log(myLibrary[i].is_read);
        readStatus.id = i;
        readStatus.addEventListener('click', () => {
          if (myLibrary[i].is_read == true) {
            myLibrary[i].is_read = false;
            readStatus.innerHTML = false;
            isread.innerHTML = "has the book been read?: " + myLibrary[i].is_read;
          }
          else {
            myLibrary[i].is_read = true;
            readStatus.innerHTML = true;
            isread.innerHTML = "has the book been read?: " + myLibrary[i].is_read;
          }
        });

        let display = document.createElement('display');

        display.appendChild(title);
        display.appendChild(author);
        display.appendChild(numpages);
        display.appendChild(isread);
        display.appendChild(remove);
        display.appendChild(readStatus);
        library.appendChild(display);
    }
}

function clearForm() {
  document.getElementById('inputTitle').value = "";
  document.getElementById('inputAuthor').value = "";
  document.getElementById('inputPages').value = "";
  document.getElementById('read').checked = false;
}

function populateBook() {
  const title = document.getElementById('inputTitle').value;
  const author = document.getElementById('inputAuthor').value;
  const pages = document.getElementById('inputPages').value;
  const read = document.getElementById('read').checked;
  const pos = myLibrary.length;
  return new Book(title, author, pages, read, pos);
}

function addBook(e) {
  e.preventDefault();
  const tempBook = populateBook();
  addBookToLibrary(tempBook);
  library.replaceChildren();
  displayBooks();
  modal.classList.remove('active');
  overlay.classList.remove('active');
  clearForm();
}

function removeBook(position) {
  myLibrary.splice(position, 1);
  library.replaceChildren();
  displayBooks();
}

