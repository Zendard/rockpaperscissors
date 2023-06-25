function getComputerChoice() {
	const choice = Math.floor(Math.random * 3);
	return choice;
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection == 1 && computerSelection == 3) {
		return "You Win!";
	} else if (playerSelection == computerSelection) {
		return "Equal";
	} else if (playerSelection > computerSelection) {
		return "You Win!"
	} else {
		return "You Lose!"
	}
}
function getPlayerChoice() {
	const choice = prompt("Rock, Paper or Scissors?")
	switch (choice.toLowerCase()) {
		case rock: { return 1 }
		case paper: { return 2 }
		case scissors: { return 3 }
	}
}