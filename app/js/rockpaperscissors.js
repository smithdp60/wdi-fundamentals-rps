////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

var playerMove = getPlayerMove();
var computerMove = getComputerMove();

function getWinner(playerMove, computerMove) {
    if (playerMove === computerMove) {
    	return "tie";
    }
    else if (playerMove === "rock") {
        if (computerMove === "scissors") {
            return "player";
        }
        else {
            return "computer";
        }
    }
    else if (playerMove === "paper") {
        if (computerMove === "rock") {
            return "player";
        }
        else {
            return "computer";
        }
    }
    else if (playerMove === "scissors") {
        if (computerMove === "paper") {
            return "player";
        }
        else {
            return "computer";
        }
    }
}

function playToFive(x) {
    console.log("Let's play RPS!");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < x && computerWins < x) {
        
        playerMove = getPlayerMove();
        computerMove = getComputerMove();
        var winner = getWinner(playerMove,computerMove);
        
    	if (winner === "player") {
    		playerWins += 1;
    	}
    	else if (winner === "computer") {
    		computerWins += 1;
    	}
    	console.log("You chose '" + playerMove + "' while the computer chose '" + computerMove + "'.");
    	console.log("Winner is: " + winner + ".");
    	console.log("The score is currently " + playerWins + " to " + computerWins + ".\n");
    }
    return [playerWins, computerWins];
}

playToFive(5);
