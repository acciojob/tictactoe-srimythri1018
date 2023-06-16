//your JS code here. If required.
// Get the necessary elements
const playersForm = document.getElementById('playersForm');
const player1Input = document.getElementById('player-1');
const player2Input = document.getElementById('player-2');
const submitButton = document.getElementById('submit');
const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const message = document.querySelector('.message');

let currentPlayer = 'Player 1';

// Event listener for submit button
submitButton.addEventListener('click', function () {
  const player1 = player1Input.value;
  const player2 = player2Input.value;

  if (player1 && player2) {
    playersForm.style.display = 'none';
    board.style.display = 'block';
    message.textContent = `${player1}, you're up!`;
  }
});

// Event listener for cell click
cells.forEach(function (cell) {
  cell.addEventListener('click', function () {
    if (this.textContent === '') {
      this.textContent = currentPlayer === 'Player 1' ? 'X' : 'O';
      message.textContent = currentPlayer === 'Player 1' ? `${player2}, you're up!` : `${player1}, you
