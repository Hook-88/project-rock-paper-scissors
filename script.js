const WEAPONS = ['ROCK', 'PAPER', 'SCISSORS'];
let playerScore = 0;
let computerScore = 0;

function displayScores (scorePlayer, scoreComputer) {
  const playerScorePlaceholder = document.querySelector('#score-player');
  const computerScorePlaceholder = document.querySelector('#score-computer');
  playerScorePlaceholder.innerHTML = scorePlayer;
  computerScorePlaceholder.innerHTML = scoreComputer;
  return true;
}

function getComputerChoice (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}


displayScores(playerScore, computerScore);


