//create a constant string array variable and name it ROCKPAPERSCISSORS
//set ROCKPAPERSCISSORS to the strings rock, paper, scissors
const ROCKPAPERSCISSORS = ['ROCK', 'PAPER', 'SCRISSORS'];
//create function getComputerChoice that takes an array as argument
const getComputerChoice = (arr) => {
//  create a number variable randomNumber
//  set randomNumber to a random flaoting number
  let randomNumber = Math.random();
//  create a number variable and name is arrayLength
//  set arrayLength to the length arr
  let arrayLength = arr.length;
//  Set randomNumber to arrayLength * randomNumber
  randomNumber *= arrayLength;
//  set randomNumber to the closet downrounded interger
  randomNumber = Math.floor(randomNumber);
//  return item from arr at index randomNumber
  return arr[randomNumber];
// 
}

//create function playRound that takes computerCh and playerCh ad arguments
//create a string variable gameMessage
//create a string variable playersChoice
//create a string variable computerChoice
// set computerChoice to computerCh
//set playersChoice to playersCh
//transform al chars in of playerChoice to uppercase
//compare playerChoice with computerCh
//determine winner 
//set gameMessage
//return gameMessage
