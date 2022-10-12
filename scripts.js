let myLibrary = ['Harry Potter', 'Goosebumps', 'Percey Jackson']

function Book(author, title, pages, read) {
    // the constructor...
    this.author = author
    this.title = title
    this.pages = pages
    this.read = read
}

function addBookToLibrary(book) {
    // do stuff here
    myLibrary.push(book)
}

function removeBook(bookTitle) {
    // Find index of book
    bookIndex = myLibrary.indexOf(bookTitle)
    // If index of book is found...
    myLibrary.forEach((item, index) => {
        if (index == bookIndex) {
            // Remove from array
            myLibrary.splice(index, 1)
        }
    })
}

const library = document.querySelector('.library');

function resetLibrary() {
    const libraryNode = document.getElementById('library')
    while (libraryNode.firstChild) {
        libraryNode.removeChild(libraryNode.lastChild)
    }
}

function listBooks () {
    resetLibrary()
    myLibrary.forEach(item => {
        const bookWrapper = document.createElement('div')
        bookWrapper.classList.add('book-wrapper')
        library.appendChild(bookWrapper)

        const book = document.createElement('div')
        book.classList.add('book')
        book.textContent = item
        bookWrapper.appendChild(book)

        const removeBookButton = document.createElement('button')
        removeBookButton.classList.add('book-close-button')
        removeBookButton.textContent = 'x'
        removeBookButton.addEventListener('click', () => {
            bookWrapper.removeChild(book)
            bookWrapper.removeChild(removeBookButton)
            library.removeChild(bookWrapper)
            console.log('Activated')
        })
        bookWrapper.appendChild(removeBookButton)
    })
}

listBooks()

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

const form = document.getElementById('form')
form.addEventListener('submit', function(event) {
    event.preventDefault()

    const author = document.getElementById('author').value
    const title = document.getElementById('title').value
    const pages = document.getElementById('pages').value
    const read = document.getElementById('read').checked

    console.log(author)
    console.log(title)
    console.log(pages)
    console.log(read)

    const newBook = new Book(author, title, pages, read)
    addBookToLibrary(newBook)

    const bookWrapper = document.createElement('div')
    bookWrapper.classList.add('book-wrapper')
    library.appendChild(bookWrapper)

    const book = document.createElement('div')
    book.classList.add('book')
    book.textContent = newBook.title
    bookWrapper.appendChild(book)

    const removeBookButton = document.createElement('button')
    removeBookButton.classList.add('book-close-button')
    removeBookButton.textContent = 'x'
    removeBookButton.addEventListener('click', () => {
        bookWrapper.removeChild(book)
        bookWrapper.removeChild(removeBookButton)
        library.removeChild(bookWrapper)
        // removeBook(newBook.title)
        // listBooks()
    })
    bookWrapper.appendChild(removeBookButton)

    document.getElementById('author').value = ''
    document.getElementById('title').value = ''
    document.getElementById('pages').value = ''
    document.getElementById('read').checked = false


})

