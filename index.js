const url = 'http://localhost:3000/games'
const listOfGames = document.getElementById('list-of-games')
const gameImage = document.getElementById('game-image')
const gameDetail = document.getElementById('game-detail')
const gameName = document.getElementById('game-name')
const gameDescription = document.getElementById('game-description')
const gameLikes = document.getElementById('game-likes')
const commentForm = document.getElementById('create-comment')
const newComment = document.getElementById('new-comment')
const createGameForm = document.getElementById('create-game')

    fetch(url)
        .then(r => r.json())
        .then(gamesArray => {
            displayGameDetails(gamesArray)
            renderGames(gamesArray)
        })

function displayGameDetails(gamesArray) {
    for(let game in gamesArray){
        let h1 = document.createElement('h1')
        let h2 = document.createElement('h2')
        h1.innerText = `${gamesArray[game]['name']}`
        h2.innerText = `${gamesArray[game]['description']}`
        gameName.appendChild(h1)
        gameDescription.appendChild(h2)
    }

}
function renderGames(gamesArray) {
    const img = document.createElement('img')
    img.src = gamesArray[games]['image']

}






    // gameDetail.textContent = games.detail
    // gameName.textContent = games.name
    // gameDescription.textContent = games.description
    // gameLikes.textContent = games.likes
