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
        img: 'images/hydgrangia.jpg',
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
        img: 'images/hydgrangia.jpg',
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
cardArray.sort(() => 0.5 -Math.random())

const gridDisplay = document.querySelector('#grid')

function createBoard () {
    for (let i=0; i < cardArray.length; i++)
    {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/cardBack.jpg');
        card.setAttribute('data-id', i)
        gridDisplay.appendChild(card)

        console.log(card, i)
    }
}

createBoard()




