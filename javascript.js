const selectionButtons = document.querySelectorAll('.selection-btn');
const descriptionDiv = document.querySelector('.description');
const resultDiv = document.querySelector('.result');
const restartButton = document.querySelector('#restart-btn');

let playerScore = 0;
let computerScore = 0;
let roundToWin = 5;

function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        alert("Tie!");
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        alert(`You win! ${playerSelection} beats ${computerSelection}`);
    } else {
        computerScore++;
        alert(`You lose! ${computerSelection} beats ${playerSelection}`);
    }
}

function updateScore() {
    resultDiv.innerHTML = `<p>Player: ${playerScore}</p><p>Computer: ${computerScore}</p>`;
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
    updateScore();
}
function endGame() {
    if (playerScore > computerScore) {
        resultDiv.innerHTML += "<p>Congratulations! You won the game!</p>";
    } else if (playerScore < computerScore) {
        resultDiv.innerHTML += "<p>Sorry, you lost the game.</p>";
    } else {
        resultDiv.innerHTML += "<p>It's a tie game.</p>";
    }
    for (const button of selectionButtons) {
        button.disabled = true;
    }
}

function startGame() {
    resetScore();
    resultDiv.innerHTML = "";
    for (const button of selectionButtons) {
        button.disabled = false;
    }
}

function handleClick(event) {
    const playerSelection = event.target.dataset.selection;
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    resultDiv.innerHTML += `<p>${result}</p>`;
    updateScore();

    if (playerScore >= roundToWin || computerScore >= roundToWin) {
        endGame();
    }
}

for (const button of selectionButtons) {
    button.addEventListener('click', handleClick);
}

function restartGame() {
    startGame();
}

for (const button of selectionButtons) {
    button.addEventListener('click', handleClick);
}

restartButton.addEventListener('click', restartGame);

