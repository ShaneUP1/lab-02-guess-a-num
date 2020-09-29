// import functions and grab DOM elements
const button = document.getElementById('button');
const input = document.getElementById('user-input');
const triesRemaining = document.getElementById('guesses');
const hiOrLow = document.getElementById('high-low');
const results = document.getElementById('results');

console.log(button, input, triesRemaining, hiOrLow, results);
// initialize state
let tries = 0;

// set event listeners to update state and DOM
