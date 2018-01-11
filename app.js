// Book constructor
function Book (title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI constructor
function UI () {}

// Show error message
UI.prototype.showAlert = function (message, className) {
  // Create div element
  const div = document.createElement('div')
  // Add message text and class
  div.appendChild(document.createTextNode(message));
  div.className = `alert ${className}`;
  //Show message
  const container = document.querySelector('.container');
        form = document.getElementById('book-form');
  container.insertBefore(div, form)

  // Delete alert after 2s
  setTimeout (function(){
    document.querySelector('.alert').remove()
  }, 2000)

}

// Add bok to list
UI.prototype.addBookToList = function(book) {
  const list = document.getElementById('book-list')
  // Create tr element
  const row = document.createElement('tr')
  // Insert cols
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete">X</a></td>
  `
  // Add book at booklist
  list.appendChild(row)
}

// Clear fields
UI.prototype.clearFields = function(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

// Event Listeners
document.getElementById('book-form').addEventListener('submit',
  function (e) {
    // Get form values
    const title = document.getElementById('title').value;
          author = document.getElementById('author').value;
          isbn = document.getElementById('isbn').value
    
    // Instantiant book
    const book = new Book (title, author, isbn)
    
    // Instantiant UI
    const ui = new UI()

    // Validate
    if ( title === '' || author === '' || isbn === '' ) {
      ui.showAlert('Please fill in all fields', 'error')
    } else {
      ui.showAlert('Book Added!', 'success')
    // Add book to list
      ui.addBookToList(book)
    // Clear fields
      ui.clearFields()
    }


    e.preventDefault();
  })