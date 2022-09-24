let myLibrary = ['Harry Potter', 'Goosebumps', 'Percey Jackson'];

function Book() {
    // the constructor...
};

function addBookToLibrary() {
    // do stuff here
};

const library = document.querySelector('.library');

function listBooks () {
    myLibrary.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('book');
        div.textContent = item;
        library.appendChild(div);
    })
};

listBooks();