const APILINK = "https://api.themoviedb.org/3/discover/movie?api_key=0d39677e3adc3d9e872b245dd6ff3bc9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
const IMG_PATH = "https://image.tmdb.org/t/p/w1280"
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?api_key=0d39677e3adc3d9e872b245dd6ff3bc9&language=en-US&page=1&include_adult=false&query="

const main = document.getElementById("section")
const form = document.getElementById("form")
const search = document.getElementById("query")

returnMovies(APILINK)

function returnMovies(url) {
    fetch(url).then(res => res.json())
    .then(function(data) {
        console.log(data.results)
        data.results.forEach(element => {
            const div_card = document.createElement('div')
            div_card.setAttribute("class", "card")

            const div_row = document.createElement('div')
            div_row.setAttribute("class", "row")

            const div_col = document.createElement('div')
            div_col.setAttribute("class", "column")

            const image = document.createElement('img')
            image.setAttribute("class", "thumbnail")
            image.setAttribute("id", "image")

            const title = document.createElement('h3')
            title.setAttribute("id", "title")

            const center = document.createElement('center')

            title.innerHTML = `${element.title}`
            image.src = IMG_PATH + element.poster_path

            center.appendChild(image)
            div_card.appendChild(center)
            div_card.appendChild(title)
            div_col.appendChild(div_card)
            div_row.appendChild(div_col)

            main.appendChild(div_row)
        })
    })
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    main.innerHTML = ""

    const searchItem = search.value

    if (searchItem) {
        returnMovies(SEARCHAPI + searchItem)
        search.value = ""
    }
})