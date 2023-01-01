const backdrop = document.querySelector("#backdrop");
const modal = document.querySelector(".modal");
const errorsOutputEl = document.querySelector("#config-errors");
const input = document.querySelector("#playername");

function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;
  backdrop.style.display = "block";
  modal.style.display = "block";
  input.focus();
}

function closePlayerConfig() {
  backdrop.style.display = "none";
  modal.style.display = "none";
  form.firstElementChild.classList.remove("error");
  errorsOutputEl.textContent = "";
  input.value = "";
}

function savePlayerConfig(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const enteredPlayername = formData.get("playername").trim();
  if (!enteredPlayername) {
    e.target.firstElementChild.classList.add("error");
    errorsOutputEl.textContent = "Enter a Name please";
    return;
  }
  const updatedPlayerDataElement = document.querySelector(
    `#player-${editedPlayer}-data`
  );
  updatedPlayerDataElement.children[1].textContent = enteredPlayername;
  players[editedPlayer - 1].name = enteredPlayername;
  closePlayerConfig();
}
