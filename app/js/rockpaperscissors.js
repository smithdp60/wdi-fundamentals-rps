
/*   Provided Code - Please Don't Edit   */
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
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}






    // This function should either give us back 'player', 'computer', or 'tie'.
    // The rules of the game are that rock beats scissors, scissors beats paper, and paper beats rock.
    // Assume that the only possible input values we can get are 'rock', 'paper', and 'scissors'.


var winner = function(playerMove, computerMove){
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
 
console.log(winner(playerMove,computerMove));






function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

