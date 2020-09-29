// import functions and grab DOM elements

import {compareNumbers} from "./mathUtils.js"

const button = document.getElementById('button');
const guess = document.getElementById('user-input');
const attemptsLeft = document.getElementById('guesses');
const hiOrLow = document.getElementById('high-low');
const results = document.getElementById('results');

const randomNum = Math.floor(Math.random()*20) + 1;
console.log(randomNum);

// initialize state
let attempts = 4;

// set event listeners to update state and DOM
button.addEventListener('click', () => {
    attempts--;
    const numGuess = guess.valueAsNumber;
    if (attempts === 0 ){
        attemptsLeft.textContent = "Game Over!"
    }

    const gameResult = compareNumbers(numGuess, randomNum);
console.log(gameResult);

    if (gameResult === 1){
        hiOrLow.textContent = "Too high!";
    }
    if (gameResult === -1){
        hiOrLow.textContent = "Too low!";
    } else if (
        gameResult === 0){
        results.textContent = "You got it!";
    }
    
    
    
        

})

