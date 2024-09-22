// display 
const display = document.querySelector("#display");

// number input variable and operator variable
let num1 = '';
let num2 = '';  

let operator = '';

// number buttons function
const numberButtons = document.querySelectorAll('.number-buttons');

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        display.textContent += button.id.slice(3);
        if (operator == '') {           // until operator is clicked, numbers are concatenated to num1
            num1 = display.textContent; // first number stored in variable num1
        } else {
            num2 = display.textContent; // second number stored in varible num2
        }
    });
});

// clear button
const clearButton = document.querySelector("#clear-button");

clearButton.addEventListener('click', () => {
    display.textContent = ''; 
    num1 = '';
    num2 = '';
    operator = '';
});

// function to save operater button pressed into a variable and clear displayValue  
const operatorButton = document.querySelectorAll(".operator-buttons");

operatorButton.forEach(button => {
    button.addEventListener('click', () => {
        operator = button.id.slice(3);
        display.textContent = '';
    })
})

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

