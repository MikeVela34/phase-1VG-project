const homeUrl = "http://localhost:3000"
const gamesUrl = homeUrl + "/games"

function renderGame() {
    fetch(gamesUrl)
        .then(r => r.json())
        .then(games => {
            games.forEach(displayGames)
        })
}
renderGame()
function displayGames(games) {
    const gameDetail = document.getElementById("game-detail")
    const gameImage = document.getElementById("game-image")
    const gameName = document.getElementById("game-name")
    const gameList = document.getElementById("list-of-games")
    const gameRating = document.getElementById("display-rating")

    const image = document.createElement("img")
    image.src = games.image
    gameList.appendChild(image)




}

