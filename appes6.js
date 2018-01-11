class Book {
  constructor (title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {

  addBookToList(book) {
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

  deleteBook(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove()
    }
  }

  showAlert(message, className) {
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

  clearFields(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}

// Event Listeners
document.getElementById('book-form').addEventListener('submit',
  function (e) {
    // Get form values
    const title = document.getElementById('title').value;
          author = document.getElementById('author').value;
          isbn = document.getElementById('isbn').value
    
    // Instantiate book
    const book = new Book (title, author, isbn)
    
    // Instantiate UI
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

document.getElementById('book-list').addEventListener('click', function(e){
  // Instantiate UI
  const ui = new UI();
  ui.deleteBook(e.target);
  ui.showAlert('Book Removed!', 'success')

  e.preventDefault();
})