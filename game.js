function getComputerChoice() {
    let choice = ["rock", "paper", "scissor"];
    let getRndIndex = Math.floor(Math.random()*30)%3;
    return choice[getRndIndex];
}

function playRound(playerSelection, computerSelection) {
    let playerWin=false,tie=false;

    if(playerSelection === "rock" && computerSelection === "scissor") {
        playerWin=true;
    }
    else if(playerSelection === "paper" && computerSelection === "rock") {
        playerWin=true;
    }
    else if(playerSelection === "scissor" && computerSelection === "paper") {
        playerWin=true;
    }
    else if(playerSelection === computerSelection) {
        tie=true;
    }

    if(playerWin) {
        return "Player won the round!";
    }
    else if(tie) {
        return "It's a tie";
    }
    else {
        return "Computer won the round!";
    }
}

function game() {
    
}