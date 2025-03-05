# Word Guessing Game

## Description
This is a simple word guessing game where the player attempts to guess a randomly selected word by entering letters. The game is timed, and the player wins by correctly guessing all letters before the timer runs out. Wins and losses are tracked and persist across sessions.

## Features
- Start the game by clicking the "Start Game" button.
- The word to be guessed is displayed as blanks (_ _ _ _ _).
- The user types letters on the keyboard to guess the word.
- If the user correctly guesses a letter, it replaces the corresponding blank.
- The game is timed, and the player loses if time runs out before guessing the full word.
- Wins and losses are tracked using `localStorage`.
- The timer resets each time a new game is started.

## Technologies Used
- HTML
- CSS (Inline styling)
- JavaScript (DOM manipulation, event handling, and localStorage usage)

## How to Play
1. Open `index.html` in a web browser.
2. Click the "Start Game" button to begin.
3. Type letters on your keyboard to guess the word.
4. If you correctly guess all the letters before time runs out, you win.
5. If the timer reaches 0 before you guess the word, you lose.
6. Wins and losses are displayed and stored.

## File Structure
- `index.html`: Main HTML structure of the game.
- `script.js`: JavaScript file handling game logic.

## Setup Instructions
1. Clone or download this repository:
   ```sh
   git clone https://github.com/Dadams11/Word_Guessing_Game.git
   ```
2. Navigate to the project folder:
   ```sh
   cd Word_Guessing_Game
   ```
3. Open `index.html` in a browser.
4. Enjoy the game!

## Future Enhancements
- Add more words to the word list.
- Improve UI with external CSS.
- Add difficulty levels with different timers and word lengths.
- Implement sound effects for correct/incorrect guesses.

## License
This project is open-source and free to use.

