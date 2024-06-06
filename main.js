const userScore = document.getElementById('user-score');
const computerScore = document.getElementById('computer-score');
const draws = document.getElementById('draws');
const compDisplay = document.getElementById('comp-display');
const userDisplay = document.getElementById('user-display');
const messageUpdater = document.getElementById('resultsDisplay');

const possibleChoices = document.querySelectorAll('.choice-btns')
const scissorsBtn = document.getElementById('scissors-btn');
const paperBtn = document.getElementById('paper-btn');
const rockBtn = document.getElementById('rock-btn');

let computerChoice;
let userChoice;
let result;
let computerCount = 0;
let userCount = 0;
let drawCount = 0;

/*
*Generate Computer Choice as soon as user clicks the buttons.
*Compare computer choice with user choice.
*Update scores based on who holds power, i.e: rocks beats scissors, paper beats rock, scissors beat paper else draw.
*Best of three.
*/ 
possibleChoices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        userChoice = e.target.value
        generateComputerChoice()
        getResults()
        compDisplay.innerHTML = computerChoice;
        userDisplay.innerHTML = userChoice;
    })
})

const generateComputerChoice = () =>{

    const randomValue = Math.floor(Math.random() * 3);
    
    if(randomValue === 1){
        return computerChoice = 'Paper';
    } else if(randomValue === 2){
        return computerChoice = 'Scissors';
    } else{
        return computerChoice = 'Rock';
    }
}

const getResults = () => {
    switch (userChoice+computerChoice) {
        case 'PaperRock':
        case 'ScissorsPaper':
        case 'RockScissors':
            result = 'You Win!'
            userCount++
            break;
        case 'RockPaper':
        case 'PaperScissors':
        case 'ScissorsRock':
            result = 'Computer Wins!'
            computerCount++
            break;
        case 'PaperPaper':
        case 'ScissorsScissors':
        case 'RockRock':
            result = 'Draw!'
            drawCount++
            break;
        default:
            result = 'Error'
    }
    messageUpdater.innerHTML = result;
    userScore.innerHTML = userCount;
    computerScore.innerHTML = computerCount;
    draws.innerHTML = drawCount;
}

