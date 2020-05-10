const display = document.querySelector(".display");

document.querySelector(".cleaning").addEventListener("click", cellCleaning);
function cellCleaning() {
  display.value = "";
}

document
  .querySelectorAll(".digits button")
  .forEach((button) => button.addEventListener("click", digitPressed));
function digitPressed(ev) {
  display.value += ev.target.innerText;
}

document
  .querySelectorAll(".operations button")
  .forEach((button) => button.addEventListener("click", operationPressed));
function operationPressed(ev) {
  display.value += ev.target.innerText;
}

const equal = document
  .querySelector(".equal")
  .addEventListener("click", calculated);

function calculated() {
  display.value = eval(display.value);
}

display.addEventListener("keypress", inputKeyPress);

function inputKeyPress(event) {
  if (event.keyCode === 13) {
    calculated();
  }
}
