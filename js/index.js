const display = document.querySelector(".display");

const cleaning = document.querySelector(".cleaning");
cleaning.addEventListener("click", cellCleaning);
function cellCleaning(){
    display.value = "";
}

const digits = document.querySelectorAll(".digits button");
digits.forEach(button => button.addEventListener("click", digitPressed));
function digitPressed(ev){
    display.value += ev.target.innerText;
}

const operations = document.querySelectorAll(".operations button");
operations.forEach(button => button.addEventListener("click", operationPressed));
function operationPressed(ev){  
    display.value += ev.target.innerText; 
}

document.querySelector(".equal").addEventListener("click", calculated);

function calculated(){
    display.value = eval(display.value);
}

