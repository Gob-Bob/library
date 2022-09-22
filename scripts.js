let myLibrary = ['Harry Potter', 'Goosebumps', 'Percey Jackson'];

function Book() {
    // the constructor...
}

function addBookToLibrary() {
    // do stuff here
}

function listBooks () {
    myLibrary.forEach(item => {
        const div = document.createElement('div')
        div.textContent = item
        document.body.appendChild(div)
    })
}

listBooks()