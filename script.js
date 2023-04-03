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

function addRoundsResultContainer () {
  const body = document.querySelector('body');
  const roundsResultContainer = document.createElement('div');
  roundsResultContainer.id = 'rounds-results-container';
  body.appendChild(roundsResultContainer);
}

function setUpGame () {
  displayScores(playerScore, computerScore);
  addClickEventToButtons();
  addRoundsResultContainer();
}

function playRound (e) {
  const computerChoice = getComputerChoice(WEAPONS);
  const playerChoice = e.target.value;
  if (roundIsATie(playerChoice, computerChoice)) {
    printMessage("it's a tie");
  } else {
    if (playerIsRoundWinner(playerChoice, computerChoice)) {
      printMessage(`You win ${playerChoice} beats ${computerChoice}`);
    } else {
      printMessage(`You lose ${computerChoice} beats ${playerChoice}`);
    }
  }
}



function addClickEventToButtons () {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(function (button) {
  button.addEventListener('click', playRound);
});
}

function roundIsATie (choicePlayer, choiceComputer) {
  return choicePlayer === choiceComputer ? true : false;
}

function printMessage (message) {
  let paragraph = document.createElement('p');
  paragraph.innerText = message;
  const roundsResultContainer = document.querySelector('#rounds-results-container');
  roundsResultContainer.appendChild(paragraph);
}

function playerIsRoundWinner (choicePlayer, choiceComputer) {
  if (  (choicePlayer === 'ROCK' && choiceComputer === 'SCISSORS') ||
        (choicePlayer === 'PAPER' && choiceComputer === 'ROCK') ||
        (choicePlayer === 'SCISSORS' && choiceComputer === 'PAPER')
  ) {
    return true;
  } else {
    return false;
  }
}

function updateScores () {

}

setUpGame();









