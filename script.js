// script.js

const diceWrapper = document.getElementById("diceWrapper");
const rollBtn = document.getElementById("rollBtn");
const result = document.getElementById("result");
const sound = document.getElementById("diceSound");
const diceCount = document.getElementById("diceCount");

// Roll Button
rollBtn.addEventListener("click", rollDice);

// Dropdown Change
diceCount.addEventListener("change", createDice);

// Create Dice
function createDice(){

  diceWrapper.innerHTML = "";

  let count = parseInt(diceCount.value);

  for(let i = 1; i <= count; i++){

    let dice = document.createElement("div");
    dice.classList.add("dice");

    dice.innerHTML = `
      <div class="dot center"></div>
    `;

    // Click On Dice
    dice.addEventListener("click", rollDice);

    diceWrapper.appendChild(dice);
  }
}

// Roll Dice
function rollDice(){

  sound.currentTime = 0;
  sound.play();

  const allDice = document.querySelectorAll(".dice");

  let total = 0;

  allDice.forEach((dice) => {

    let random = Math.floor(Math.random() * 6) + 1;

    total += random;

    dice.classList.add("roll-animation");

    setTimeout(() => {
      dice.classList.remove("roll-animation");
    }, 700);

    updateDice(dice, random);

  });

  result.innerHTML = `Total Result : ${total}`;
}

// Update Dice Face
function updateDice(dice, number){

  let dots = "";

  switch(number){

    case 1:
      dots = `
        <div class="dot center"></div>
      `;
      break;

    case 2:
      dots = `
        <div class="dot top-left"></div>
        <div class="dot bottom-right"></div>
      `;
      break;

    case 3:
      dots = `
        <div class="dot top-left"></div>
        <div class="dot center"></div>
        <div class="dot bottom-right"></div>
      `;
      break;

    case 4:
      dots = `
        <div class="dot top-left"></div>
        <div class="dot top-right"></div>
        <div class="dot bottom-left"></div>
        <div class="dot bottom-right"></div>
      `;
      break;

    case 5:
      dots = `
        <div class="dot top-left"></div>
        <div class="dot top-right"></div>
        <div class="dot center"></div>
        <div class="dot bottom-left"></div>
        <div class="dot bottom-right"></div>
      `;
      break;

    case 6:
      dots = `
        <div class="dot top-left"></div>
        <div class="dot top-right"></div>
        <div class="dot middle-left"></div>
        <div class="dot middle-right"></div>
        <div class="dot bottom-left"></div>
        <div class="dot bottom-right"></div>
      `;
      break;
  }

  dice.innerHTML = dots;
}

// First Time Load
createDice();