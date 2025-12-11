let secretNumber;
let attempts;

function initGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('guessInput').value = '';
    document.getElementById('message').textContent = '';
    document.getElementById('attempts').textContent = 'Attempts: 0';
    document.getElementById('guessBtn').style.display = 'inline';
    document.getElementById('playAgainBtn').style.display = 'none';
}

function checkGuess() {
    const guess = parseInt(document.getElementById('guessInput').value);
    if (isNaN(guess) || guess < 1 || guess > 100) {
        document.getElementById('message').textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }
    attempts++;
    document.getElementById('attempts').textContent = `Attempts: ${attempts}`;
    if (guess < secretNumber) {
        document.getElementById('message').textContent = 'Too low! Try again.';
    } else if (guess > secretNumber) {
        document.getElementById('message').textContent = 'Too high! Try again.';
    } else {
        document.getElementById('message').textContent = `Correct! You guessed the number in ${attempts} attempts.`;
        document.getElementById('guessBtn').style.display = 'none';
        document.getElementById('playAgainBtn').style.display = 'inline';
    }
}

document.getElementById('guessBtn').addEventListener('click', checkGuess);
document.getElementById('playAgainBtn').addEventListener('click', initGame);

// Initialize the game on load
initGame();