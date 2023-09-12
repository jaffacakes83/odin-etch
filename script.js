const elGameGrid = document.getElementById('game-container');

for (let i=1; i<=16; i++){
const gameSquare = document.createElement('div');

gameSquare.className = (`game-square gameSquare ${i}`);

elGameGrid.appendChild(gameSquare);
}
