let playerScore = 0;
let compScore = 0;
let draws = 0;
const outcomeDiv = document.querySelector(".outcome");
const p = document.createElement("p");
const p2 = document.createElement("p");
const h2 = document.createElement("h2");
const modalObject = document.getElementById("myModal");
const modal = document.querySelector(".modal-content");
const buttons = document.querySelectorAll('button');

const getComputerChoice = () => {
  const myArray = ["rock", "paper", "scissors"];
  let randomValue = myArray[Math.floor(Math.random() * myArray.length)];
  return randomValue;
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection == computerSelection) {
    draws++;
    p.innerText = `You tied you both picked ${playerSelection}`;
    p2.innerText = `|| Computer wins: ${compScore} || Player Wins: ${playerScore} || Draws: ${draws} ||`;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    compScore++;
    p.innerText = "You lose Paper beats Rock.";
    p2.innerText = `|| Computer wins: ${compScore} || Player Wins: ${playerScore} || Draws: ${draws} ||`;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    compScore++;
    p.innerText = "You lose Rock beats Scissors.";
    p2.innerText = `|| Computer wins: ${compScore} || Player Wins: ${playerScore} || Draws: ${draws} ||`;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    compScore++;
    p.innerText = "You lose Scissors beats Paper.";
    p2.innerText = `|| Computer wins: ${compScore} || Player Wins: ${playerScore} || Draws: ${draws} ||`;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore++;
    p.innerText = "You win Paper beats Rock.";
    p2.innerText = `|| Computer wins: ${compScore} || Player Wins: ${playerScore} || Draws: ${draws} ||`;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++;
    p.innerText = "You win Rock beats Scissors.";
    p2.innerText = `|| Computer wins: ${compScore} || Player Wins: ${playerScore} || Draws: ${draws} ||`;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore++;
    p.innerText = "You win Scissors beats Paper.";
    p2.innerText = `|| Computer wins: ${compScore} || Player Wins: ${playerScore} || Draws: ${draws} ||`;
  }
    outcomeDiv.appendChild(p);
    outcomeDiv.appendChild(p2);
};

const checkForWinner = (playerScore, compScore) => {
  if (playerScore === 5) {
    h2.classList.add("player-won");
    h2.innerText = `You won ${playerScore} to ${compScore} great job beating the computer!`;
    modalObject.style.display = "block";
  } else if (compScore == 5) {
    h2.classList.add("player-won");
    h2.innerText = `You lost ${playerScore} to ${compScore} better luck next time!`;
    modalObject.style.display = "block";
  }
    modal.prepend(h2);
};


buttons.forEach(button => {
  button.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const playerSelection = `${button.className}`;
    playRound(playerSelection, computerSelection);
    checkForWinner(playerScore, compScore);
  })
});

