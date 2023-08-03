const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");

let playerScore = 0;
let computerScore = 0;

playerScoreDisplay.innerText = `Player:${playerScore}`;
computerScoreDisplay.innerText = `Computer:${computerScore}`;

function getComputerChoice() {
	const choice = Math.floor(Math.random() * 3);
	return choice;
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection == 1 && computerSelection == 3) {
		return true;
	} else if (playerSelection == computerSelection) {
		return null;
	} else if (playerSelection > computerSelection) {
		return true;
	} else {
		return false;
	}
}
