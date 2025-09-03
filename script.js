"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
// message functions
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
// score functions
const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};
//check btn
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // not a number
  if (!guess) {
    displayMessage("⛔️ No number!");
  }
  // =============================================================
  else if (guess === secretNumber) {
    // if it's right
    displayMessage("🎉 Correct Number!");
    // changing body color and style box
    document.querySelector("body").style.backgroundColor = "var(--color_secbg)";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      //display the highest score
      document.querySelector(".Highscore").textContent = highScore;
    }
  }
  // ==================================================================
  else if (guess !== secretNumber) {
    // if the guessing number is not equal to the random number
    if (score > 1) {
      // display hint
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      // score decrement
      score--;
      displayScore(score);
    }
    // =============================================================
    else {
      //loss
      displayMessage("💥 You lost the game!");
      displayScore(0);
    }
  }
  // =============================================================
});
//resetting
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  displayMessage("Start guessing...");
  displayScore(score);
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "var(--color_bg)";
  document.querySelector(".number").style.width = "16rem";
});
