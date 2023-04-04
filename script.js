const WEAPONS = ['ROCK', 'PAPER', 'SCISSORS'];
const BODY = document.querySelector('body');
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
  const roundsResultContainer = document.createElement('div');
  roundsResultContainer.id = 'rounds-results-container';
  BODY.appendChild(roundsResultContainer);
}

function setUpGame () {
  displayScores(playerScore, computerScore);
  addClickEventToButtons();
  addRoundsResultContainer();
}

function playRound (e) {
  if (!gameOver()) {
    const computerChoice = getComputerChoice(WEAPONS);
    const playerChoice = e.target.value;
    printRoundResult(playerChoice, computerChoice);
    if (gameOver()) {
      printMessage('Game Over!');
      const roundsResultContainer = document.querySelector('#rounds-results-container');
      addResetButton(roundsResultContainer);
      
    }
  } else {
    return false;
  }
 
}

function printRoundResult (choicePlayer, choiceComputer) {
  if (roundIsATie(choicePlayer, choiceComputer)) {
    printMessage("it's a tie");
  } else {
    if (playerIsRoundWinner(choicePlayer, choiceComputer)) {
      printMessage(`You win ${choicePlayer} beats ${choiceComputer}`);
      displayScores(playerScore, computerScore);
    } else {
      printMessage(`You lose ${choicePlayer} beats ${choiceComputer}`);
      displayScores(playerScore, computerScore);
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
  return choicePlayer === choiceComputer;
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
    playerScore++;
    return true;
  } else {
    computerScore++;
    return false;
  }
}

function gameOver () {
  return playerScore > 4 || computerScore > 4 
}

function playerIsGameWinner () {
  return playerScore > 4
}

function addResetButton (parent) {
  const button = document.createElement('button');
  button.id = "reset-btn";
  button.innerText = 'Reset game';
  parent.appendChild(button);
  button.addEventListener('click', resetGame);
}

function deleteRoundResults (roundsContainer) {
  while (roundsContainer.firstChild) {
    roundsContainer.removeChild(roundsContainer.firstChild)
  }
}

function resetGame () {
  const roundsResultContainer = document.querySelector('#rounds-results-container');
  deleteRoundResults(roundsResultContainer);
  playerScore = 0;
  computerScore = 0;
  displayScores(playerScore, computerScore);
}
  

setUpGame();









