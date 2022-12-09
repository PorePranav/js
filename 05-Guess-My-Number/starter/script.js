"use strict";

/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct Number!";
console.log(document.querySelector(".message").textContent);

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/

const number = Math.trunc(Math.random() * 20);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "No number entered!";
  }

  if (guess === number) {
    document.querySelector(".message").textContent =
      "Congratulations, you won! 🎉";
  } else {
    document.querySelector(".message").textContent = "Try again! 🤔";
  }
});
