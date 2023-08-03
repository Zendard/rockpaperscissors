let playerScore = 0;
let computerScore = 0;

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
function getPlayerChoice() {
	const choice = prompt("Rock, Paper or Scissors?");
	switch (choice.toLowerCase()) {
		case "rock": {
			return 1;
		}
		case "paper": {
			return 2;
		}
		case "scissors": {
			return 3;
		}
	}
}
