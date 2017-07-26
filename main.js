const button = document.querySelector('button')
const listing = document.querySelector('.listing')
const searchResults = document.querySelector('.searchResults')

button.addEventListener('click', searchEvent => {
  let query = document.querySelector('#search').value
  searchResults.textContent = `Showing search results for ${query}:`
  fetch(`https://crossorigin.me/http://www.recipepuppy.com/api/?q=${query}`)
    .then(response => response.json())
    .then(data => {
      listing.innerHTML = ""
      data.results.forEach(function(searchData, index) {
        const resultBox = document.createElement('li')
        const title = document.createElement('p')
        const image = document.createElement('img')
        const link = document.createElement('a')
        link.href = searchData.href
        title.textContent = searchData.title
        if (searchData.thumbnail) {
          image.src = searchData.thumbnail
        } else {
          image.src = "http://via.placeholder.com/100x70"
        }
        listing.appendChild(resultBox)
        link.appendChild(image)
        link.appendChild(title)
        resultBox.appendChild(link)
      })
    })
})
