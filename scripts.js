let myLibrary = ['Harry Potter', 'Goosebumps', 'Percey Jackson']

function Book(author, title, pages, read) {
    // the constructor...
    this.author = author
    this.title = title
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {
    // do stuff here
}

const library = document.querySelector('.library');

function listBooks () {
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
    const read = document.getElementById('read').value

    console.log(author)
    console.log(title)
    console.log(pages)
    console.log(read)

    document.getElementById('author').value = ''
    document.getElementById('title').value = ''
    document.getElementById('pages').value = ''
    document.getElementById('read').value = 'off'
})