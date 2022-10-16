function Book(author, title, pages, read) {
    // the constructor...
    this.author = author
    this.title = title
    this.pages = pages
    this.read = read
}

const harryPotterBook = new Book("J.K. Rowling", "Harry Potter", 800, true)
const goosebumpsBook = new Book("R.L. Stein", "Goosebumps", 500, true)
const perceyJacksonBook = new Book("Rick Riordan", "Percey Jackson", 600, false)

let myLibrary = [harryPotterBook, goosebumpsBook, perceyJacksonBook]

function addBookToLibrary(book) {
    // do stuff here
    myLibrary.push(book)
}

const library = document.querySelector('.library')

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}

function listBooks () {
    removeAllChildNodes(library)
    myLibrary.forEach(item => {
        const bookWrapper = document.createElement('div')
        bookWrapper.classList.add('book-wrapper')
        library.appendChild(bookWrapper)

        const bookTitle = document.createElement('div')
        bookTitle.classList.add('book')
        bookTitle.textContent = `Title: ${item.title}`
        bookWrapper.appendChild(bookTitle)

        const bookRead = document.createElement('div')
        bookRead.classList.add('book')
        bookRead.textContent = `Read: ${item.read}`
        bookWrapper.appendChild(bookRead)

        const buttonWrapper = document.createElement('div')
        buttonWrapper.classList.add('button-wrapper')
        bookWrapper.appendChild(buttonWrapper)

        const changeReadStatusButton = document.createElement('button')
        changeReadStatusButton.classList.add('book-read-button')
        changeReadStatusButton.textContent = 'Toggle Read Status'
        changeReadStatusButton.addEventListener('click', () => {
            if (item.read) {
                item.read = false
                listBooks()
            } else {
                item.read = true
                listBooks()
            }
        })
        buttonWrapper.appendChild(changeReadStatusButton)

        const removeBookButton = document.createElement('button')
        removeBookButton.classList.add('book-close-button')
        removeBookButton.textContent = 'Remove'
        removeBookButton.addEventListener('click', () => {
            library.removeChild(bookWrapper)
        })
        buttonWrapper.appendChild(removeBookButton)
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

    const bookTitle = document.createElement('div')
    bookTitle.classList.add('book')
    bookTitle.textContent = `Title: ${title}`
    bookWrapper.appendChild(bookTitle)

    const bookRead = document.createElement('div')
    bookRead.classList.add('book')
    bookRead.textContent = `Read: ${read}`
    bookWrapper.appendChild(bookRead)

    const removeBookButton = document.createElement('button')
    removeBookButton.classList.add('book-close-button')
    removeBookButton.textContent = 'x'
    removeBookButton.addEventListener('click', () => {
        bookWrapper.removeChild(bookTitle)
        bookWrapper.removeChild(bookRead)
        bookWrapper.removeChild(removeBookButton)
        library.removeChild(bookWrapper)
    })
    bookWrapper.appendChild(removeBookButton)

    document.getElementById('author').value = ''
    document.getElementById('title').value = ''
    document.getElementById('pages').value = ''
    document.getElementById('read').checked = false


})

