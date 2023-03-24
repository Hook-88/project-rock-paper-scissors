//create const array WEAPONS
const WEAPONS = [];
//push 'ROCK', 'PAPER', 'SCISSORS' to WEAPONS array
WEAPONS.push('ROCK', 'PAPER', 'SCISSORS');
//create function computerChoice with weaponsArr as argument
const computerChoice = (weaponsArr) => {
  //generate random number between 0 and 2
  //create let randomNumber
  let randomNumber = 0;
  //set randomNumber to Math.random()
  randomNumber = Math.random();
  //set randomNumber to randomNumber * length of weaponsArr
  randomNumber *= weaponsArr.length;
  //set randomNumber to Math.floot(randomNumber)
  randomNumber = Math.floor(randomNumber);
  //return weaponsArr[randomNumber]
  return weaponsArr[randomNumber];
}

//create function itsATie with playerSelection and computerSelection as arguments
const itsATie = (playerSelection, computerSelection) => {
  //check if the values are the same
  //if true return true
  //else return false
  return playerSelection === computerSelection ? true : false
}

//create function playerIsWinner with playerSelection and computerSelection as arguments
const playerIsWinner = (playerSelection, computerSelection) => {
  //check if (playerSelection equals 'ROCK' and computerSelection equals 'SCISSORS') OR (playerSelection equals 'PAPER' and computerSelection equals 'ROCK') OR (playerSelection equals 'SCISSORS' and computerSelection equals 'PAPER')
  if (
      (playerSelection === WEAPONS[0] && computerSelection === WEAPONS[2]) ||
      (playerSelection === WEAPONS[1] && computerSelection === WEAPONS[0]) ||
      (playerSelection === WEAPONS[2] && computerSelection === WEAPONS[1])
      ) {
      // if true return true  
        return true
        //else return false  
      } else {
        false
      }
}



//create function singleRound with playerSelection and computerSelection as arguments
const playRound = (playerSelection, computerSelection) => {
  let playerDefSelection = playerSelection.toUpperCase();
  if (itsATie(playerDefSelection, computerSelection)) {
    return `It's a tie!`
  } else if (playerIsWinner(playerDefSelection, computerSelection)) {
    return `You win!, ${playerDefSelection} beats ${computerSelection}`
  } else {
    return `You lose!, ${computerSelection} beats ${playerDefSelection}`
  }
}

let player = prompt('Choose your weapon!');
let computer = computerChoice(WEAPONS);
console.log(playRound(player, computer))

