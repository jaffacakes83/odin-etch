// script.js

let boardSize = 16; // Default board size

// Set the initial value of the input field
document.getElementById('boardSize').value = boardSize;



function createBoard() {
    boardSize = parseInt(document.getElementById('boardSize').value, 10);
    const gameBoard = document.getElementById('gameBoard');
    gameBoard.innerHTML = ''; // Clear the previous board

    const squareCount = boardSize * boardSize;

    for (let i = 0; i < squareCount; i++) {
        const square = document.createElement('div');
        square.className = 'square';

            // Add a hover effect to the square
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = randomColour();
            });

        gameBoard.appendChild(square);
    }

    gameBoard.style.gridTemplateColumns = `repeat(${boardSize}, 1fr)`;
}

document.getElementById('createButton').addEventListener('click', createBoard);

createBoard();



function randomColour () {
    const red = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);

    const rgb = `rgb(${red}, ${green}, ${blue})`;
    return rgb;
}





