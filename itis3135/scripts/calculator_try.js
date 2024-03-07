function scriptTest() {
    alert("TEST");
}

const clearButton = document.getElementById("clear-button");
const posNegButton = document.getElementById("pos-neg-button");
const percentButton = document.getElementById("percent-button");
const divideButton = document.getElementById("divide-button");
const sevenButton = document.getElementById("seven-button");
const eightButton = document.getElementById("eight-button");
const nineButton = document.getElementById("nine-button");
const multButton = document.getElementById("mult-button");
const fourButton = document.getElementById("four-button");
const fiveButton = document.getElementById("five-button");
const sixButton = document.getElementById("six-button");
const minusButton = document.getElementById("minus-button");
const oneButton = document.getElementById("one-button");
const twoButton = document.getElementById("two-button");
const threeButton = document.getElementById("three-button");
const plusButton = document.getElementById("plus-button");
const zeroButton = document.getElementById("zero-button");
const decimalButton = document.getElementById("decimal-button");
const equalsButton = document.getElementById("equals-button");

clearButton.addEventListener("click", pressClear);
posNegButton.addEventListener("click", pressPosNeg);
percentButton.addEventListener("click", pressPercent);
divideButton.addEventListener("click", pressDivide);
sevenButton.addEventListener("click", pressSeven);

const pressClear = () => {
    document.getElementById("display").innerHTML = "";
}

const pressPosNeg = () => {
    
}

const pressPercent = () => {
    
}

const pressDivide = () => {
    
}

const pressSeven = () => {
    document.getElementById("display").innerHTML = "7";
}