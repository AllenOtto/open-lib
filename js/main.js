document.querySelector('button').addEventListener('click', getFetch)
document.querySelector('.book-list').innerHTML = localStorage.getItem('books')

async function getFetch() {
    const isbn = document.querySelector('input').value
    const url = `https://openlibrary.org/isbn/${isbn}.json`
    const response = await fetch(url)
    const jsonData = await response.json()
    console.log(jsonData)
    if(!localStorage.getItem('books')) {
        let books = localStorage.setItem('books', jsonData.title)
    } else {
        let books = localStorage.getItem('books') + "; " + jsonData.title
        localStorage.setItem('books', books)
    }
    
    document.querySelector('.book-list').innerHTML = localStorage.getItem('books')
    document.querySelector('.book-list').classList.add('focus')
}

// Examples of popular book isbn numbers
// 9780980200447, 978-1-60309-515-0, 978-1-60309-469-6, 978-1-60309-514-3, 
// 978-1-60309-412-2
