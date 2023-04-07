const cChoice = document.querySelector('.computer .show-choice');
const pChoice = document.querySelector('.player .show-choice');
const pScore = document.querySelector('.player-score');
const cScore = document.querySelector('.computer-score');
const startBtn = document.querySelector('.start-game');
const gameBody = document.querySelector('.game-body');
const choiceButtons = document.querySelectorAll('.choices button');
const cShowChoice = document.querySelector('.computer .show-choice');
const pShowChoice = document.querySelector('.player .show-choice');
const whoWon = document.querySelector('.who-won');
let pWin = 0, cWin = 0;

startBtn.addEventListener('click', () => {
    gameBody.style.visibility = 'visible';
    gameBody.style.top = '0';
});

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'tie';
    }
    else if (
        (playerSelection === 'rock' && computerSelection === 'scissor') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissor' && computerSelection === 'paper')
    ) {
        return 'player';
    }
    else {
        return 'computer';
    }
}

function game() {
    choiceButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const playerSelection = button.value;
            const computerSelection = getComputerChoice();
            const result = playRound(playerSelection, computerSelection);
            // console.log(`Player Chose: ${playerSelection}, Computer Chose: ${computerSelection}`);
            cChoice.innerHTML = `<img width=250px height=250px alt="an image of rock" src="images/${computerSelection}.jpeg">`;
            pChoice.innerHTML = `<img width=250px height=250px alt="an image of rock" src="images/${playerSelection}.jpeg">`;
            if (result === 'player') {
                pWin++;
                pScore.innerHTML = `Player Score- ${pWin}`;
                pShowChoice.style.borderColor = '#43eb34';
                cShowChoice.style.borderColor = '#eb3434';
                // console.log('Player won the round!');
            }
            else if (result === 'computer') {
                cWin++;
                cScore.innerHTML = `Computer Score- ${cWin}`;
                cShowChoice.style.borderColor = '#43eb34';
                pShowChoice.style.borderColor = '#eb3434';
                // console.log('Computer won the round!');
            }
            else {
                // console.log('It\'s a tie!');
                cShowChoice.style.borderColor = '#5d5c5c';
                pShowChoice.style.borderColor = '#5d5c5c';
            }
            // console.log(`Player wins: ${pWin}, Computer wins: ${cWin}`);
            if(pWin==5 || cWin==5) {
                checkWhoWon();
            }
        });
    });
}

function checkWhoWon() {
    gameBody.style.top = '100vh';
    startBtn.style.visibility = 'hidden';
    whoWon.style.visibility = 'visible';
    if (pWin > cWin) {
        console.log('Player WON');
        whoWon.innerHTML = `<p>Player Won!🥳</p>
                            <p>Score is Player - ${pWin} and Computer - ${cWin}</p>`;
        // alert('Player WON');
    }
    else {
        console.log('Computer WON');
        whoWon.innerHTML = `<p>Computer Won!🤖</p>
                            <p>Score is Player - ${pWin} and Computer - ${cWin}</p>`;
        // alert('Computer WON');
    }
}

game();