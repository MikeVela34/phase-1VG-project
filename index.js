const homeURL = "http://localhost:3000"
const gamesURL = homeURL + "/games"
const gameList = document.getElementById("list-of-games")
const gameDetail = document.getElementById("game-detail")
//const gameImage = document.getElementById("game-image")
const gameName = document.getElementById("game-name")
const gameLikes = document.getElementById("display-likes")
const gameDescription = document.getElementById("display-description")

    fetch(gamesURL)
        .then(r => r.json())
        .then(games => {
            games.forEach(displayGames)
        })


function renderDescription(gamesArray) {
    for (let game in gamesArray) {
        let h2 = document.createElement('h2')
            h2.innerText = `${gamesArray[game]['name']}`
            gameList.appendChild(h2)

    }
        renderDescription()
}

        
function displayGames(games) {
    const img = document.createElement("img")
    img.src = games.image
    gameList.appendChild(img)
}
   






    // gameDetail.textContent = games.detail
    // gameName.textContent = games.name
    // gameDescription.textContent = games.description
    // gameLikes.textContent = games.likes
