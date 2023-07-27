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
        img.onclick = () => {
            displayGame(gameArray, game)
        }


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















/*let currentGame;

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
        img.onclick = () => {
            displayGame(gameArray, game)
        }

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
*/


















































/*let currentGame;
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
        img.onclick = () => {
            displayGame(gameArray, game)

        }
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
}*/



















































/*let currentGame;

const url = 'http://localhost:3000/games'
const gameList = document.getElementById('game-list')
const gameImages = document.getElementById('game-images')
const gameName = document.getElementById('game-name')
const gameDescription = document.getElementById('game-description')
const gameLikes = document.getElementById('likes')
const likeButton = document.getElementById('like-btn')
const dislikeButton = document.getElementById('dislike-btn')
const addGameForm = document.getElementById("add-game")


fetch(url)
    .then(r => r.json())
    .then(gameArray => {
        renderGameList(gameArray)
        displayGame(gameArray, 0)
        newGameForm()
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

        img.onclick = () => {



            displayGame(gameArray, game)
        }
        img.
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

function newGameForm() {
    addGameForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const newGameName = document.getElementById("new-game-name").value
        const newGameImage = document.getElementById("new-game-image").value
        const newGameDescription = document.getElementById("new-game-description").value
        const newGameForm = {
            name: newGameName,
            image: newGameImage,
            description: newGameDescription
        }
        gameList(newGameForm)
    });
}*/