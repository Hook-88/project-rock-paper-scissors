//Create WEAPONS array
const WEAPONS = ['ROCK', 'PAPER', 'SCISSORS'];
//create playerScore

//Create function to play a game


const computerChoice = arr => {
  let randomNumber = Math.floor(Math.random() * arr.length);
  return arr[randomNumber];
}


const setUpGame = (playerScore, computerScore) => {
  //display the beginning scores
  displayScores(playerScore, computerScore);
  //create empty round results container and add to body
  const roundResultsContainer = document.createElement('div');
  body.appendChild(roundResultsContainer);
}

const displayScores = (playerScore, computerScore) => {
  const body = document.querySelector('body');
  const playerScoreElement = document.querySelector('#score-player');
  const computerScoreElement = document.querySelector('#score-computer');
  playerScoreElement.innerHTML = playerScore;
  computerScoreElement.innerHTML = computerScore;
}

playGame();

const playGame = () => {
  setUpGame(playerScore, computerScore);
  //create score var
  let playerScore = 0;
  let computerScore = 0;
  //get computer choice from Weapons Array
  console.log(computerChoice(WEAPONS));


}



const printMessage = (message) => {
  if (typeof message !== 'string') {
    console.log('arg is not a string, please enter a string value')
    return false;
  } else {
    let body = document.querySelector('body');
    let paragraph = document.createElement('p');
    paragraph.innerHTML = message;
    body.appendChild(paragraph);
    return true;
  }
}



