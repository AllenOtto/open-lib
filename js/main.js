document.querySelector('button').addEventListener('click', getFetch)
document.querySelector('h2').innerHTML += "<span>"+ localStorage.bookTitle +"</span><br>"

async function getFetch() {
    const isbn = document.querySelector('input').value
    const response = await fetch(`https://openlibrary.org/isbn/${isbn}.json`)
    const jsonData = await response.json()
    console.log(jsonData)
    localStorage.setItem("bookTitle", jsonData.title)
    document.querySelector('h2').innerHTML = "Book Title: " + localStorage.bookTitle
    document.querySelector('h2').classList.add('focus')
}

// Examples of popular book isbn numbers
// 9780980200447, 978-1-60309-515-0, 978-1-60309-469-6, 978-1-60309-514-3, 
// 978-1-60309-412-2
