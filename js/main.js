document.querySelector('button').addEventListener('click', getFetch)

async function getFetch() {
    const isbn = document.querySelector('input').value
    const response = await fetch(`https://openlibrary.org/${isbn}/9780140328721`)
    const jsonData = await response.json()
    console.log(jsonData.thumbnail_url)
    document.querySelector('img').src = jsonData
}
