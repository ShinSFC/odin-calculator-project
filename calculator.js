// display 
const display = document.querySelector("#display");
// display.textContent = "0123456789"; // tests display and it works

// number buttons
const oneButton = document.querySelector("#one-button");
oneButton.addEventListener("click", () => {
    display.textContent += '1';
});

const twoButton = document.querySelector("#two-button");
twoButton.addEventListener("click", () => {
    display.textContent += '2';
});

const threeButton = document.querySelector("#three-button");
threeButton.addEventListener("click", () => {
    display.textContent += '3';
});

const fourButton = document.querySelector("#four-button");
fourButton.addEventListener("click", () => {
    display.textContent += '4';
});

const fiveButton = document.querySelector("#five-button");
fiveButton.addEventListener("click", () => {
    display.textContent += '5';
});

const sixButton = document.querySelector("#six-button");
sixButton.addEventListener("click", () => {
    display.textContent += '6';
});


const sevenButton = document.querySelector("#seven-button");
sevenButton.addEventListener("click", () => {
    display.textContent += '7';
});

const eightButton = document.querySelector("#eight-button");
eightButton.addEventListener("click", () => {
    display.textContent += '8';
});

const nineButton = document.querySelector("#nine-button");
nineButton.addEventListener("click", () => {
    display.textContent += '9';
});

const zeroButton = document.querySelector("#zero-button");
zeroButton.addEventListener("click", () => {
    display.textContent += '0';
});

let displayValue = display.textContent;

// clear button
const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener('click', () => {
    display.textContent = '';
});

// math functions
const add = function(num1, num2) {
    return num1 + num2;
}

const subtract = function(num1, num2) {
    return num1 - num2;
}

const multiply = function(num1, num2) {
    return num1 * num2;
}

const divide = function(num1, num2) {
    return num1 / num2;
}

// operate function takes 2 numbers and an operator and returns the answer
let operate = function(num1, num2, operator) {
    if (operator == add) {
        return add(num1, num2);
    } else if (operator == subtract) {
        return subtract(num1, num2);
    } else if (operator == multiply) {
        return multiply(num1, num2);
    } else if (operator == divide) {
        return divide(num1, num2);
    }
};

// console.log(operate(4, 2, subtract)); // operate function works

// 