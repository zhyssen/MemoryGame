// Array with card objects
const cardArray = [
    {
        name: 'aster',
        img: 'images/aster.jpg',
    },
    {
        name: 'daisy',
        img: 'images/daisy.jpg',
    },
    {
        name: 'foxglove',
        img: 'images/foxglove.jpg',
    },
    {
        name: 'hydrangia',
        img: 'images/hydrangia.jpg',
    },
    {
        name: 'magnolia',
        img: 'images/magnolia.jpg',
    },
    {
        name: 'petunia',
        img: 'images/petunia.jpg',
    },
    {
        name: 'rose',
        img: 'images/rose.jpg',
    },
    {
        name: 'tulip',
        img: 'images/tulip.jpg',
    },
    {
        name: 'aster',
        img: 'images/aster.jpg',
    },
    {
        name: 'daisy',
        img: 'images/daisy.jpg',
    },
    {
        name: 'foxglove',
        img: 'images/foxglove.jpg',
    },
    {
        name: 'hydrangia',
        img: 'images/hydrangia.jpg',
    },
    {
        name: 'magnolia',
        img: 'images/magnolia.jpg',
    },
    {
        name: 'petunia',
        img: 'images/petunia.jpg',
    },
    {
        name: 'rose',
        img: 'images/rose.jpg',
    },
    {
        name: 'tulip',
        img: 'images/tulip.jpg',
    }
]

// Shortcut to randomize an array
cardArray.sort(() => 0.5 - Math.random())

// Variables
const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

// Fucntion to create the board
function createBoard () {
    for (let i=0; i < cardArray.length; i++)
    {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/cardBack.jpg');
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}

// Function to check for a match
function checkMatch () {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    
       if (optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src', 'images/cardBack.jpg')
        cards[optionTwoId].setAttribute('src', 'images/cardBack.jpg')
        alert('You clicked the same card')
    }

    // Check to see if the cards match
    if (cardsChosen[0] == cardsChosen[1]) {
        
        // Change this if you want something fun
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'images/white.jpg')
        cards[optionTwoId].setAttribute('src', 'images/white.jpg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        
        cardsWon.push(cardsChosen)
    }
    // Reset cards to card back when there isn't a match
    else {
        cards[optionOneId].setAttribute('src', 'images/cardBack.jpg')
        cards[optionTwoId].setAttribute('src', 'images/cardBack.jpg')
        alert('Sorry, try again!')
    }
    
    cardsChosen = []
    cardsChosenIds = []
    resultDisplay.textContent = cardsWon.length

    if (cardsWon.length == (cardArray.length/2)) {
        resultDisplay.textContent = 'Congratulations! You have found them all!'
    }
}

// Fuction to flip the card
function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length == 2) {
        setTimeout(checkMatch, 500)
    }

}

createBoard()
