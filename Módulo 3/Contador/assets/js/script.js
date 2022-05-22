var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
var buttonAdicionar = document.querySelector(".adicionar");
var buttonSubtrair = document.querySelector(".subtrair");

currentNumber.addEventListener("click", increment);
currentNumber.addEventListener("click", decrement);

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber >= 10) {
        buttonAdicionar.disabled = true;
    } else if (currentNumber < 0){
        currentNumberWrapper.style.color = "red";
        buttonAdicionar.disabled = false;
    } 
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber <= -5) {
        buttonSubtrair.disabled = true;
    } else if (currentNumber < 0){
        currentNumberWrapper.style.color = "red";
        buttonSubtrair.disabled = false;
    }
}
