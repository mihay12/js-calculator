const display = document.querySelector(".display");

document
  .querySelector(".cleaning")
  .addEventListener("click", cellCleaning);
function cellCleaning() {
  display.value = "";
}

document
  .querySelector(".delete-one-item")
  .addEventListener("click", deleteOneItem);
function deleteOneItem() {
  valueDisplay = display.value; 
  display.value = valueDisplay.substring(0,valueDisplay.length-1);
}

document
  .querySelectorAll(".digits button")
  .forEach((button) => button.addEventListener("click", digitPressed));
function digitPressed(ev) {
  display.value += ev.target.innerText;
  return  display.value;
}

document
  .querySelectorAll(".operations button")
  .forEach((button) => button.addEventListener("click", operationPressed));
function operationPressed(ev) {
  display.value += ev.target.innerText;
  return  display.value;
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
