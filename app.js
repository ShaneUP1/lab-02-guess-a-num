// import functions and grab DOM elements
const button = document.getElementById('button');
const guess = document.getElementById('user-input');
const triesRemaining = document.getElementById('guesses');
const hiOrLow = document.getElementById('high-low');
const results = document.getElementById('results');

const randomNum = Math.floor(Math.random()*20) + 1;
console.log(randomNum);


// initialize state
let tries = 0;

// set event listeners to update state and DOM
button.addEventListener('click', () => {
    const guessMax = 4;
    tries++;
    const numGuess = guess.value;
    
        if (numGuess > randomNum){
          return hiOrLow.textContent = 'Too high!';
        }
    }

})

