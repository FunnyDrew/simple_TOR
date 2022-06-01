const buttons = document.querySelectorAll('button');

const playerScoresDiv = document.querySelector('.player-scores');
const computerScoresDiv = document.querySelector('.computer-scores');

const playerChooseDiv = document.querySelector('.player-choose');
const computerChooseDiv = document.querySelector('.computer-choose');

let playerScores = 0;
let computerScores = 0;

const initGame = () => {
    playerScoresDiv.textContent = 0;
    computerScoresDiv.textContent = 0;

    playerChooseDiv.textContent = '';
    computerChooseDiv.textContent = '';
}

const playMap = [[0, "c", "p"], ["p", 0, "c"], ["c", "p", 0]];
const variants = ['rock', 'paper', 'scissors'];
const mapToScore = {0: [0, 0],
                   "p": [1, 0],
                   "c": [0, 1]};

const makeStep = () => Math.floor(Math.random()*3);

buttons.forEach((button) => button.addEventListener('click', (e) => {
    e.preventDefault();
    
    const playerChoose = variants.indexOf(e.target.id);
    const computerChoose = makeStep();
    console.log(playerChoose);
    console.log(computerChoose);
    console.log(playMap[playerChoose][computerChoose]);
    result = mapToScore[playMap[playerChoose][computerChoose]];
    console.log(result);
    })
);
