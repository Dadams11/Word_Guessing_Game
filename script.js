// Word Guessing Game

document.addEventListener("DOMContentLoaded", function () {
    const words = ["apple", "banana", "cherry", "grape", "orange"];
    let chosenWord = "";
    let displayWord = [];
    let guessedLetters = new Set();
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
        timeLeft = 60;
        updateDisplay();
        messageDisplay.textContent = "";
        clearInterval(timer);
        timer = setInterval(updateTimer, 1000);
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
            clearInterval(timer);
            losses++;
            localStorage.setItem("losses", losses);
            messageDisplay.textContent = "You lost!";
            updateDisplay();
        }
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
                    clearInterval(timer);
                    wins++;
                    localStorage.setItem("wins", wins);
                    messageDisplay.textContent = "You won!";
                }
            }
            updateDisplay();
        }
    });
    
    startButton.addEventListener("click", startGame);
    updateDisplay();
});
