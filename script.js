let playerScore = 0;
let compScore = 0;
let playerSelection = prompt("Please enter Rock, Paper or Scissors.");
function getComputerChoice() {
  const myArray = ["Rock", "Paper", "Scissors"];
  let randomValue = myArray[Math.floor(Math.random() * myArray.length)];
  return randomValue;
}
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = getComputerChoice().toLowerCase();
  console.log('1', playerSelection, '2', computerSelection)
  if (playerSelection == computerSelection) {
    return "Tie game!";
  }
  else if (playerSelection == "rock" && computerSelection == "paper"){
    return "You lose Paper beats Rock.";
  }
  else if (playerSelection == "scissors" && computerSelection == "rock"){
    return "You lose Rock beats Scissors.";
  }
  else if (playerSelection == "paper" && computerSelection == "scissors"){
    return "You lose Scissors beats Paper.";
  }
  else if (playerSelection == "paper" && computerSelection == "rock"){
    return "You win Paper beats Rock.";
  }
  else if (playerSelection == "rock" && computerSelection == "scissors"){
    return "You win Rock beats Scissors.";
  }
  else if (playerSelection == "scissors" && computerSelection == "paper"){
    return "You win Scissors beats Paper.";
  }
}
function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(playerSelection, computerSelection));
  }
}
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


