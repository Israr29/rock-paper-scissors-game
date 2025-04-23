let userScore  = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const userScorePara = document.querySelector('#user');
const compScorePara = document.querySelector('#comp');



const genCompchoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
}

const drawGame = () =>{
    console.log('game was draw');
    msg.innerText = 'Game was draw, Play Again';
    msg.style.backgroundColor = '#081b31';
}


const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = 'green';
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log('You Lose!')
        msg.innerText = `You lose!  ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = 'red';
    }
}

const playGame = (userChoice) => {
    const compChoice = genCompchoice();

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === 'rock') {
            userWin = compChoice === 'paper' ? false : true;
        } else if (userChoice === 'paper') {
            userWin = compChoice === 'scissors' ? false : true;
        } else {
            userWin = compChoice === 'rock' ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};


choices.forEach((choice) => {
    const userChoice = choice.getAttribute('id');
    choice.addEventListener('click', () => {
        playGame(userChoice,);
    })
})



document.querySelector('#resetBtn').addEventListener('click', () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    msg.innerText = 'Play Your Move';
    msg.style.backgroundColor = '#081b31';
});




