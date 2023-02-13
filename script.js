let playerScore = 0;
let compScore = 0;
function getComputerChoice() {
  const myArray = ["Rock", "Paper", "Scissors"];
  let randomValue = myArray[Math.floor(Math.random() * myArray.length)];
  return randomValue;
}
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = getComputerChoice().toLowerCase();
  if (playerSelection == computerSelection) {
    return "Tie game!";
  }
  else if (playerSelection == "rock" && computerSelection == "paper"){
    compScore++;
    return "You lose Paper beats Rock.";
  }
  else if (playerSelection == "scissors" && computerSelection == "rock"){
    compScore++;
    return "You lose Rock beats Scissors.";
  }
  else if (playerSelection == "paper" && computerSelection == "scissors"){
    compScore++;
    return "You lose Scissors beats Paper.";
  }
  else if (playerSelection == "paper" && computerSelection == "rock"){
    playerScore++;
    return "You win Paper beats Rock.";
  }
  else if (playerSelection == "rock" && computerSelection == "scissors"){
    playerScore++;
    return "You win Rock beats Scissors.";
  }
  else if (playerSelection == "scissors" && computerSelection == "paper"){
    playerScore++;
    return "You win Scissors beats Paper.";
  }
}

function game() {
  for (let i = 1; i <= 5; i++) {
    let playerSelection = prompt("Please enter Rock, Paper or Scissors.");
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
  if (playerScore > compScore) {
    return `Congratulations! You've won the game of Rock, Paper, Scissors!\nFinal Score
    \nPlayer Score: ${playerScore} \nComputer Score: ${compScore}`;
  }
  else if (compScore > playerScore) {
    return `Better luck next time! Although you didn't win this round of Rock, Paper, Scissors, don't get discouraged. \nFinal Score
    \nPlayer Score: ${playerScore} \nComputer Score: ${compScore}`;
  }
  else {
    return `It's a tie! Both players chose the same option. Good effort, let's play again to determine the ultimate winner! \nFinal Score
    \nPlayer Score: ${playerScore} \nComputer Score: ${compScore}`
  }
}
console.log(game());




