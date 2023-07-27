let currentGame;
const url = 'http://localhost:3000/games'
const gameList = document.getElementById('game-list')
const gameImages = document.getElementById('game-images')
const gameName = document.getElementById('game-name')
const gameDescription = document.getElementById('game-description')
const gameLikes = document.getElementById('likes')
const likeButton = document.getElementById('like-btn')
const dislikeButton = document.getElementById('dislike-btn')

fetch(url)
    .then(r => r.json())
    .then(gameArray => {
        renderGameList(gameArray)
        displayGame(gameArray, 0)

    })

function renderGameList(gameArray) {
    for (let game in gameArray) {
        const img = document.createElement('img')
        const pTag = document.createElement('p')
        const div = document.createElement('div')
        pTag.innerText = gameArray[game]['name']
        img.src = gameArray[game]['image']
        div.append(img)
        gameList.append(div)
        div.append(pTag)
        img.addEventListener('event', () => {
            displayGame(gameArray, game)

        })
    }
}

function displayGame(gameArray, game) {
    currentGame = game
    gameImages.src = gameArray[game]['image']
    gameName.innerText = `Game Name: ${gameArray[game]['name']}`
    gameDescription.innerText = `Description: ${gameArray[game]['description']}`
    gameLikes.innerText = `Likes: ${gameArray[game]['likes']}`

}

function addLikes() {
    likeButton.addEventListener('click', () => {
        currentGame.gameLikes +=
            gameLikes.innerText = `Likes: ${currentGame.likes}`
    })
    console.log('i am being clicked')
}
const createComment = document.getElementById("create-comment")
const commentPlace = document.getElementById('comment')
function addComment() {
    createComment.addEventListener('submit', () => {
        e.preventDefault()
        const newComment = document.getElementById("new-comment").value
        commentPlace.innerText = newComment

    })
}







