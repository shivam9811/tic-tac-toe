const game = document.querySelector("#active-game");
const modal2 = document.querySelector(".modal2");
const ok = document.querySelector(".ok");
const activePlayerName = document.querySelector("#active-player-name");

resetGame = () => {
  currentRound = 0;
  activePlayer = 0;
  gameIsOver = false;
  gameover.firstElementChild.innerHTML =
    'you Won,<span id="winner-name"></span> !';
  gameover.style.display = "none";

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gamedata[i][j] = 0;
    }
  }
  for (let gameFieldElement of gameFieldElements) {
    gameFieldElement.textContent = "";
    gameFieldElement.classList.remove("disabled");
  }
};

startNewGame = () => {
  if (players[0].name === "" && players[1].name === "") {
    backdrop.style.display = "block";
    modal2.style.display = "block";
    ok.addEventListener("click", () => {
      modal2.style.display = "none";
      backdrop.style.display = "none";
    });
    return;
  }
  resetGame();
  activePlayerName.textContent = players[activePlayer].name;
  game.style.display = "block";
};

selectGameField = (event) => {
  if (gameIsOver) {
    return;
  }

  if (gamedata[event.target.dataset.row][event.target.dataset.col] > 0) {
    return;
  }
  gamedata[event.target.dataset.row][event.target.dataset.col] =
    activePlayer + 1;
  event.target.textContent = players[activePlayer].symbol;
  event.target.classList.add("disabled");
  activePlayer = !activePlayer ? 1 : 0;

  activePlayerName.textContent = players[activePlayer].name;
  currentRound++;
  let winner = checkForGameOver();
  if (winner === -1) {
    gameover.style.display = "block";
    gameover.firstElementChild.textContent = " It's a draw";
  } else if (winner !== 0) {
    gameover.style.display = "block";
    gameover.firstElementChild.innerHTML = `You Won,<span id="winner-name"> ${
      players[winner - 1].name
    }</span> !`;
    gameIsOver = true;
  }
};

checkForGameOver = () => {
  for (let i = 0; i < 3; i++) {
    if (
      gamedata[i][0] > 0 &&
      gamedata[i][0] === gamedata[i][1] &&
      gamedata[i][1] === gamedata[i][2]
    ) {
      return gamedata[i][0];
    }
  }
  for (let i = 0; i < 3; i++) {
    if (
      gamedata[0][i] > 0 &&
      gamedata[0][i] === gamedata[1][i] &&
      gamedata[1][i] === gamedata[2][i]
    ) {
      return gamedata[0][i];
    }
  }

  if (
    gamedata[0][0] > 0 &&
    gamedata[0][0] === gamedata[1][1] &&
    gamedata[1][1] === gamedata[2][2]
  ) {
    return gamedata[0][0];
  }
  if (
    gamedata[2][0] > 0 &&
    gamedata[2][0] === gamedata[1][1] &&
    gamedata[1][1] === gamedata[0][2]
  ) {
    return gamedata[0][2];
  }

  if (currentRound === 9) {
    return -1;
  }
  return 0;
};
