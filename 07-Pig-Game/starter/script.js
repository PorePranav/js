'use strict';

//Selecting elements and classes
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0 = document.querySelector("#current--0");
const current1 = document.querySelector("#current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
let currentPlayer = player0;
let currentScore = 0;
let currentPlayerScore = current0;
let totalPlayerScore0 = 0;
let totalPlayerScore1 = 0;

const switchToPlayer1 = function(){
    currentPlayer = player1;
    currentScore = 0;
    currentPlayerScore.textContent = 0;
    currentPlayerScore = current1;
    player0.classList.remove("player--active");
    player1.classList.add("player--active");
}

const switchToPlayer0 = function(){
    currentPlayer = player0;
    currentScore = 0;
    currentPlayerScore.textContent = 0;
    currentPlayerScore = current0;
    player1.classList.remove("player--active");
    player0.classList.add("player--active");
}

//Rolling dice functionality
btnRoll.addEventListener("click", function(){
    //1. Generate random roll
    const roll = Math.trunc(Math.random() * 6) + 1;
    
    //2. Display roll
    diceEl.classList.remove("hidden");
    switch(roll){
        case 1 :
            diceEl.src = "dice-1.png";
            break;

        case 2:
            diceEl.src = "dice-2.png";
            break;

        case 3:
            diceEl.src = "dice-3.png";
            break;

        case 4:
            diceEl.src = "dice-4.png";
            break;

        case 5:
            diceEl.src = "dice-5.png";
            break;

        case 6:
            diceEl.src = "dice-6.png";
            break;
    }

    //3. Check if roll is 1
    if(roll !== 1){
        currentScore += roll;
        currentPlayerScore.textContent = currentScore;
    }
    else{
        if(currentPlayer === player0){
            switchToPlayer1();
        }
        else{
            switchToPlayer0();
        }
        
    }
});

btnHold.addEventListener("click", function(){
    if(currentPlayer === player0){
        totalPlayerScore0 += currentScore;
        score0El.textContent = totalPlayerScore0;
        switchToPlayer1();
    }
    else{
        totalPlayerScore1 += currentScore;
        score1El.textContent = totalPlayerScore1;
        switchToPlayer0();
    }
});

btnNew.addEventListener("click", function(){
    window.location.reload();
});