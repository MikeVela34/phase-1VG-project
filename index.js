let currentGame
const url = 'http://localhost:3000/games'
const gameList = document.getElementById('game-list')
const gameImages = document.getElementById('game-images')
const gameName = document.getElementById('game-name')
const gameDescription = document.getElementById('game-description')
const gameRating = document.getElementById('rating')
const addGameForm = document.getElementById('add-game')

fetch(url)
    .then(r => r.json())
    .then(gameArray => {
        renderGameList(gameArray)
        displayGame(gameArray, 0)
    })

function renderGameList(gameArray) {
    gameArray.forEach((gameData, gameIndex) => {
        const img = document.createElement('img')
        const pTag = document.createElement('p')
        const div = document.createElement('div')

        pTag.innerText = gameData['name']
        img.src = gameData['image']
        div.append(img)
        gameList.append(div)
        div.append(pTag)

        img.onclick = () => {
            displayGame(gameArray, gameIndex)
        }
    })
}

function displayGame(gameArray, gameIndex) {
    currentGame = gameIndex;
    gameImages.src = gameArray[gameIndex]['image']
    gameName.innerText = `Game Name: ${gameArray[gameIndex]['name']}`
    gameDescription.innerText = `Description: ${gameArray[gameIndex]['description']}`
    gameRating.innerText = `Rating: ${gameArray[gameIndex]['rating']}`
}

addGameForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const newGameName = document.getElementById('new-game-name').value
    const newGameImage = document.getElementById('new-game-image').value
    const newGameDescription = document.getElementById('new-game-description').value
    const newGameRating = document.getElementById('new-game-rating').value

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: newGameName,
            image: newGameImage,
            description: newGameDescription,
            rating: newGameRating
        })
    })
        .then(r => r.json())
        .then(newGame => {
            document.getElementById('new-game-name').value = ''
            document.getElementById('new-game-image').value = ''
            document.getElementById('new-game-description').value = ''
            document.getElementById('new-game-rating').value = ''

            const img = document.createElement('img')
            const pTag = document.createElement('p')
            const div = document.createElement('div')

            pTag.innerText = newGame.name
            img.src = newGame.image
            div.append(img)
            gameList.append(div)
            div.append(pTag)
            img.onclick = () => {
                displayGame([newGame], 0)
            }
        })
})