//getting all elements
const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const resetButton = document.getElementById('reset');
const messages = document.getElementsByClassName('message');
const tooHighMessage = document.getElementById('too-high');
const tooLowMessage = document.getElementById('too-low');
const maxGuessesMessage = document.getElementById('max-guesses');
const numberOfGuessesMessage = document.getElementById('number-of-guesses');
const correctMessage = document.getElementById('correct');

let targetNumber;
let attempts = 0;
const maxNumberOfAttempts = 5;

// Returns a random number from min (inclusive) to max (exclusive)
// Usage:
// > getRandomNumber(1, 50)
// <- 32
// > getRandomNumber(1, 50)
// <- 11
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function checkGuess() {
  // Get value from guess input element
  const guess = parseInt(guessInput.value, 10);
  attempts = attempts + 1;

  hideAllMessages();

  if (guess === targetNumber) {
    numberOfGuessesMessage.style.display = '';
    numberOfGuessesMessage.innerHTML = `You made ${attempts} guesses`;

    correctMessage.style.display = '';

    submitButton.disabled = true;
    guessInput.disabled = true;
  }

  if (guess !== targetNumber) {
    if (guess < targetNumber) {
      tooLowMessage.style.display = '';
    } else {
      tooLowMessage.style.display = '';
    }

    const remainingAttempts = maxNumberOfAttempts - attempts;

    numberOfGuessesMessage.style.display = '';
    numberOfGuessesMessage.innerHTML = `You guessed ${guess}. <br> ${remainingAttempts} guesses remaining`;
  }

  //removed extra = sign
  if (attempts === maxNumberOfAttempts) {
    submitButton.disabled = true;
    guessInput.disabled = true;
  }

  guessInput.value = '';

  resetButton.style.display = '';
}

function hideAllMessages() {
  //removed = from "elementIndex <= messages.length"
  for (let elementIndex = 0; elementIndex < messages.length; elementIndex++) {
    //correcting hiding messages
    //messages[elementIndex].style.display = 'none';
    messages[elementIndex].hidden = true;
  }
}

//corrected spelling of "function"
function setup() {
  // Get random number
  targetNumber = getRandomNumber(1, 100);
  console.log(`target number: ${targetNumber}`);

  // Reset number of attempts
  //corrected hardcoded number + using correct max attempts number (5 instead of 0); removes console error
  const maxNumberOfAttempts = 5;

  // Enable the input and submit button
  //corrected spelling of "disabled"
  submitButton.disabled = false;
  guessInput.disabled = false;

  hideAllMessages();
  //correcting hiding reset button
  //resetButton.style.display = 'none';
  resetButton.hidden = true;
}

submitButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', setup);

setup();

//7/8 bugs fixed: line 56-57, line 70-72, line 76-77, line 83-84 (2 corrections), line 87-88, line 92-94