document.querySelector('button').addEventListener('click', getFetch)
if(!localStorage.getItem('books')){
    // If there's not a book in local storage, do nothing
} else {
    // Display book(s) in storage
    document.querySelector('.book-list').textContent = localStorage.getItem('books')
}

async function getFetch() {
    const isbn = document.querySelector('input').value // Get user input
    const url = `https://openlibrary.org/isbn/${isbn}.json`
    const response = await fetch(url)
    const jsonData = await response.json()
    console.log(jsonData)
    if(!localStorage.getItem('books')) {
        localStorage.setItem('books', jsonData.title)
    } else {
        let books = localStorage.getItem('books') + "; " + jsonData.title
        localStorage.setItem('books', books)
    }

    document.querySelector('.book-list').textContent = localStorage.getItem('books')
    document.querySelector('.book-list').classList.add('focus')
}

// Examples of popular book isbn numbers
// 9780980200447, 978-1-60309-515-0, 978-1-60309-469-6, 978-1-60309-514-3, 
// 978-1-60309-412-2
