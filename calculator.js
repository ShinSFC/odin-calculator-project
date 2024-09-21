// display 
const display = document.querySelector("#display");
// display.textContent = "0123456789"; // tests display and it works

// buttons
const oneButton = querySelector("#one-button");
oneButton.addEventListener("click", () => {

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