document.addEventListener("DOMContentLoaded", function () {
    const words = ["apple", "banana", "cherry", "grape", "orange"];
    let chosenWord = "";
    let displayWord = [];
    let guessedLetters = new Set();
    let incorrectGuesses = 0;
    let maxAttempts = 4;
    let timer;
    let timeLeft = 60;
    let wins = localStorage.getItem("wins") ? parseInt(localStorage.getItem("wins")) : 0;
    let losses = localStorage.getItem("losses") ? parseInt(localStorage.getItem("losses")) : 0;
    
    const wordDisplay = document.getElementById("word-display");
    const startButton = document.getElementById("start-button");
    const timerDisplay = document.getElementById("timer");
    const messageDisplay = document.getElementById("message");
    const winsDisplay = document.getElementById("wins");
    const lossesDisplay = document.getElementById("losses");
    
    function startGame() {
        chosenWord = words[Math.floor(Math.random() * words.length)];
        displayWord = Array(chosenWord.length).fill("_");
        guessedLetters.clear();
        incorrectGuesses = 0;
        timeLeft = 60;
        giveHint();
        updateDisplay();
        messageDisplay.textContent = "";
        clearInterval(timer);
        timer = setInterval(updateTimer, 1000);
    }
    
    function giveHint() {
        let hintIndex = Math.floor(Math.random() * chosenWord.length);
        displayWord[hintIndex] = chosenWord[hintIndex];
    }
    
    function updateDisplay() {
        wordDisplay.textContent = displayWord.join(" ");
        winsDisplay.textContent = `Wins: ${wins}`;
        lossesDisplay.textContent = `Losses: ${losses}`;
    }
    
    function updateTimer() {
        if (timeLeft > 0) {
            timeLeft--;
            timerDisplay.textContent = `Time Left: ${timeLeft}s`;
        } else {
            endGame(false);
        }
    }
    
    function endGame(win) {
        clearInterval(timer);
        if (win) {
            wins++;
            localStorage.setItem("wins", wins);
            messageDisplay.textContent = "You won!";
        } else {
            losses++;
            localStorage.setItem("losses", losses);
            messageDisplay.textContent = `You lost! The word was: ${chosenWord}`;
        }
        updateDisplay();
    }
    
    document.addEventListener("keydown", function (event) {
        let letter = event.key.toLowerCase();
        if (/[a-z]/.test(letter) && !guessedLetters.has(letter)) {
            guessedLetters.add(letter);
            if (chosenWord.includes(letter)) {
                for (let i = 0; i < chosenWord.length; i++) {
                    if (chosenWord[i] === letter) {
                        displayWord[i] = letter;
                    }
                }
                if (!displayWord.includes("_")) {
                    endGame(true);
                }
            } else {
                incorrectGuesses++;
                if (incorrectGuesses >= maxAttempts) {
                    endGame(false);
                }
            }
            updateDisplay();
        }
    });
    
    startButton.addEventListener("click", startGame);
    updateDisplay();
});
