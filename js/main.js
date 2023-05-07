document.querySelector('button').addEventListener('click', getFetch)

async function getFetch() {
    const isbn = document.querySelector('input').value
    const response = await fetch(`https://openlibrary.org/isbn/${isbn}.json`)
    const jsonData = await response.json()
    console.log(jsonData)
    document.querySelector('h2').textContent = "Book Title: "+jsonData.title
    document.querySelector('h2').classList.add('focus')
}

// Examples of popular book isbn numbers
// 9780980200447, 978-1-60309-515-0, 978-1-60309-469-6
