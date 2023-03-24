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
//check if (playerSelection equals 'ROCK' and computerSelection equals 'SCISSORS') OR (playerSelection equals 'PAPER' and computerSelection equals 'ROCK') OR (playerSelection equals 'SCISSORS' and computerSelection equals 'PAPER')
// if true return true
//else return fals  



//create function singleRound with playerSelection and computerSelection as arguments
//

