const board = document.querySelector('#board')
const SQUARES_NUMBER = 500
const hexCodes = ['#05beb4', '#ed885a', '#c734d2', '#ff4f03', '#188f3a', '#f1c8ed', '#b62c40', '#3b37db'];


const generateRandomColor = () => {
        index = Math.floor(Math.random() * hexCodes.length)

    return hexCodes[index];
}

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))


    square.addEventListener('mouseleave', () => removeColor(square))


    board.append(square)
}

function setColor(element) {
    const color = generateRandomColor()
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 20px ${color}, 0 0 40px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 4px #000`
}