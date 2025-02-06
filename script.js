const colors = ["red", "green", "yellow", "blue", "purple", "orange"];
let targetColor = "";
let score = 0;

const colorBox = document.querySelector("[data-testid='colorBox']");
const colorOptions = document.querySelectorAll("[data-testid='colorOption']");
const gameInstructions = document.querySelector("[data-testid='gameInstructions']");
const gameStatus = document.querySelector("[data-testid='gameStatus']");
const scoreDisplay = document.querySelector("[data-testid='score']");
const newGameButton = document.querySelector("[data-testid='newGameButton']");
function startGame() {
    targetColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.backgroundColor = targetColor;
    gameStatus.textContent = "";
    
    colorOptions.forEach(button => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        button.style.backgroundColor = randomColor;
        button.onclick = () => checkGuess(randomColor);
    });
}

function checkGuess(selectedColor) {
    if (selectedColor === targetColor) {
        gameStatus.textContent = "🎉 Correct!";
        gameStatus.style.color = "limegreen";
        gameStatus.classList.add("correct-answer");
        score++;
        scoreDisplay.textContent = score;
    } else {
        gameStatus.textContent = "❌ Wrong, try again!";
        gameStatus.style.color = "red";
        gameStatus.classList.add("wrong-answer");
    }

    // Remove animation class after it finishes
    setTimeout(() => {
        gameStatus.classList.remove("correct-answer", "wrong-answer");
        startGame();
    }, 1000);
}
newGameButton.addEventListener("click", () => {
    score = 0;  // Reset the score
    scoreDisplay.textContent = score;  // Update the UI
    gameStatus.textContent = "New game started! 🎮";
    gameStatus.style.color = "white";
    startGame(); // Start a fresh round
});


newGameButton.addEventListener("click", startGame);

document.addEventListener("DOMContentLoaded", startGame);
