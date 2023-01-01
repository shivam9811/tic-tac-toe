const edit1 = document.querySelector(".edit1");
const edit2 = document.querySelector(".edit2");
const cancel = document.querySelector(".cancel");

const form = document.querySelector(".form");

const gameFieldElements = document.querySelectorAll("#game-board li");

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 0;
let gameIsOver = false;

const gamedata = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

edit1.addEventListener("click", openPlayerConfig);
edit2.addEventListener("click", openPlayerConfig);
cancel.addEventListener("click", closePlayerConfig);
backdrop.addEventListener("click", closePlayerConfig); // getting backdrop from config.js

form.addEventListener("submit", savePlayerConfig);

const start = document.querySelector(".start");

start.addEventListener("click", startNewGame);

for (const gameFieldElement of gameFieldElements) {
  gameFieldElement.addEventListener("click", selectGameField);
}

const gameover = document.querySelector("#game-over");
const winnerName = document.querySelector("#winner-name");
