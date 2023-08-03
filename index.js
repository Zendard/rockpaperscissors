const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const winTextDisplay = document.querySelector("#winner");

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");

function setScoreDisplay() {
	playerScoreDisplay.innerText = `Player:${playerScore}`;
	computerScoreDisplay.innerText = `Computer:${computerScore}`;
}
function getPlayerChoice(e) {
	switch (this.id) {
		case "rock":
			playerSelection = 1;
			break;
		case "paper":
			playerSelection = 2;
			break;
		case "scissors":
			playerSelection = 3;
			break;
	}
	console.log(playerSelection);
	const computerSelection = getComputerChoice();
	const win = playRound(playerSelection, computerSelection);
	if (win == true) {
		winTextDisplay.innerText = "You won!";
		playerScore += 1;
	} else {
		winTextDisplay.innerText = "You lost!";
		computerScore = 1;
	}
	setScoreDisplay();
	checkEnd();
}

buttons.forEach((button) => {
	button.addEventListener("click", getPlayerChoice);
});

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

function checkEnd() {
	if (playerScore >= 5) {
		winTextDisplay.innerHTML = "You won the game";
		buttons.forEach((button) => {
			button.disabled = true;
		});
	} else if (computerScore >= 5) {
		winTextDisplay.innerHTML = "You lost the game";
		buttons.forEach((button) => {
			button.disabled = true;
		});
	}
}

setScoreDisplay();
