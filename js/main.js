// Rock, Paper, Scissors game against a computer opponent.
let rockPaperScissors = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

let btn = document.querySelector('button');

// Get the random result from the computer
// Rock, paper, or scissors
function computerPlay() {
    let result = [rockPaperScissors[[Math.floor(Math.random() * 3)]]];
    return result;
}

// Function that will play a round of Rock, Paper, Scissors
// Get the user selection and check against computer selection
// Use game rule logic to determine the winner
function playRound(playerSelection, computerSelection) {

    playerSelection = prompt('Enter Rock, Paper, or Scissors: ').toLowerCase();
    computerSelection = computerPlay();

    let roundResult = '';

    if (playerSelection == computerSelection) {
        console.log(`computer: ${computerSelection}`);
        roundResult = `Tie! The computer chose: ${computerSelection}`;
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            computerScore++;
            roundResult = `You lose! ${computerSelection} beats ${playerSelection}`;
        } else {
            playerScore++;
            roundResult = `You win! ${playerSelection} beats ${computerSelection}`;
        }
    } else if (playerSelection == 'paper') {
        console.log(`computer: ${computerSelection}`);
        if (computerSelection == 'scissors') {
            computerScore++;
            roundResult = `You lose! ${computerSelection} beats ${playerSelection}`;
        } else {
            playerScore++;
            roundResult = `You win! ${playerSelection} beats ${computerSelection}`;
        }
    } else if (playerSelection == 'scissors') {
        console.log(`computer: ${computerSelection}`);
        if (computerSelection == 'rock') {
            computerScore++;
            roundResult = `You lose! ${computerSelection} beats ${playerSelection}`;
        } else {
            playerScore++;
            roundResult = `You win! ${playerSelection} beats ${computerSelection}`;
        }
    } else {
        roundResult = "Invalid input";
    }

    return console.log(roundResult);
}

// Run the playRound() function for 5 rounds
// Keep track of rounds and display scores after 5 rounds
function game() {
    let rounds = 0;
    for (let i = 0; i < 5; i++) {
        playRound();
        i = rounds++;
        console.log(`Round: ${rounds}`);
    }

    if (playerScore > computerScore) {
        console.log(`You won! Your Score: ${playerScore}. Computer Score: ${computerScore}`);
    } else {
        console.log(`You lost! Computer Score: ${computerScore}. Your Score: ${playerScore}`);
    }
}

btn.addEventListener('click', game);