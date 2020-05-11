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
  display.value = valueDisplay
    .substring(0,valueDisplay.length-1);
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
  const string = display.value;
  const lastSymbol = string.slice(-1);
  if(lastSymbol === "+" || lastSymbol === "-" || lastSymbol === "*" || lastSymbol === "/"){
    display.value = string.substring(0, string.length - 1);
    display.value += ev.target.innerText;
  } else{
    display.value += ev.target.innerText;
  }
}

const equal = document
  .querySelector(".equal")
  .addEventListener("click", calculated);

function calculated() {
  display.value = eval(display.value);
  if(eval(display.value) === Infinity || eval(display.value) === (-Infinity)){
    alert("На нуль ділити не можна");
    cellCleaning();
  }
}

display.addEventListener("keypress", inputKeyPress);

function inputKeyPress(event) {
  if (event.keyCode === 13) {
    calculated();
  }
}
