let myLibrary = ['Harry Potter', 'Goosebumps', 'Percey Jackson']

function Book() {
    // the constructor...
}

function addBookToLibrary() {
    // do stuff here
}

const library = document.querySelector('.library');

function listBooks () {
    myLibrary.forEach(item => {
        const div = document.createElement('div')
        div.classList.add('book')
        div.textContent = item
        library.appendChild(div)
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