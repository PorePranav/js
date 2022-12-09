"use strict";

const generateSecretNumber = () =>{
  return Math.trunc(Math.random() * 20) + 1;
}

let secretNumber = generateSecretNumber();
let score = 20;
let highScore = 0;

const displayMessage = message => {
  document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("🛑 No number entered!")
  }

  else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    displayMessage("🎉 Correct number!");

    document.querySelector("body").style.backgroundColor = "#60B347";
    document.querySelector(".number").style.width = "30rem";

    if(score > highScore){
      highScore = score;
      document.querySelector(".highscore").textContent = highScore; 
    }
  } 

  else if(guess > secretNumber || guess < secretNumber){
    let currentState = guess > secretNumber ? "📈 Too high!" : "📉 Too low!"; 
    if(score > 0){
      displayMessage(currentState);
      score -= 1;
      document.querySelector(".score").textContent = score;
    }
    else{
      document.querySelector("body").style.backgroundColor = "#C41E3A";
      displayMessage("💥 You lost the game!"); 
    }
  }
});

document.querySelector(".again").addEventListener("click", function(){
  score = 20;
  secretNumber = generateSecretNumber();

  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
