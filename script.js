"use strict";
const userInput = document.getElementById('user-input');
const resultsDisplay = document.getElementById('results-div');
const checkButton = document.getElementById('check-btn');
const clearButton = document.getElementById('clear-btn');

checkButton.addEventListener('click', () => {
    if (!userInput.value) {
        alert('Please provide a phone number');
        return;
    }
    let regEX = /^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/;

    if (regEX.test(userInput.value)) {
        resultsDisplay.style.display = 'block';
        resultsDisplay.textContent = `Valid US number: ${userInput.value}`;
    } else {
        resultsDisplay.style.display = 'block';
        resultsDisplay.textContent = `Invalid US number: ${userInput.value}`;
    };

});

clearButton.addEventListener('click', () => {
    resultsDisplay.textContent = "";
})