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
        return "player";
    }
    else if(tie) {
        return "tie";
    }
    else {
        return "computer";
    }
}

function game() {
    console.log("Let the game begin...");

    let pWin=0, cWin=0;

    for(let i=1;i<=5;i++) {
        let playerSelection = prompt("Enter rock, paper or scissor:").toLowerCase();
        let computerSelection = getComputerChoice();
        let status = playRound(playerSelection,computerSelection);
        if(status === "player") {
            console.log("Player won the round!");
            pWin++;
        }
        else if(status === "computer") {
            console.log("Computer won the round!");
            cWin++;
        }
        else {
            console.log("It's a tie!");
        }
    }

    if(pWin > cWin) {
        console.log("");
        console.log("Player WON");
        alert("Player WON");
    }
    else if(pWin == cWin) {
        console.log("");
        console.log("TIE");
        alert("TIE");
    }
    else {
        console.log("");
        console.log("Computer WON");
        alert("Computer WON");
    }
}
