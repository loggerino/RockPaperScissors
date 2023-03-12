let playerScore = 0;
let computerScore = 0;
let roundToWin = 5;

function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie!";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function getPlayerChoice() {
    let choice = prompt("Choose rock paper scissors");
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Invalid Choice");
    }
    return choice;
}

function game() {
    while (playerScore < roundToWin && computerScore < roundToWin) {
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();
        prompt(playRound(playerSelection, computerSelection));
    }

    if (playerScore > computerScore) {
        prompt("Congratulations! You won the game!");
    } else if (playerScore < computerScore) {
        prompt("Sorry, you lost the game.");
    } else {
        prompt("It's a tie game.");
    }
}


game();