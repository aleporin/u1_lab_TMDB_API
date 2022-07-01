const API_KEY = 'fd942ef7e8c7c1653f6bb028d47a5f2e'
const DOMAIN = 'https://api.themoviedb.org/3'
const IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/original'

const button = document.querySelector('button')
const searchMovie = document.querySelector('#search-input')
const searchIn = document.querySelector('input')
const movieList = document.querySelector('.movie-list')
const moviePoster = document.createElement('img')

const renderList = (movies) => {
  let searchResults = movies.data.results
  searchResults.forEach((movie) => {
    const newDiv = document.createElement('div')
    newDiv.innerHTML = `<img src=${IMAGE_BASE_PATH + movie.poster_path} />`
    const newHeader = document.createElement('h2')
    newHeader.innerText = movie.original_title
    movieList.appendChild(newDiv)
    movieList.appendChild(newHeader)
  })
}

button.addEventListener('click', async () => {
  const movieName = searchIn.value
  let response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=${API_KEY}`
  )
  console.log(response)
  renderList(response)
})
