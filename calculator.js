// display 
const display = document.querySelector("#display");

// display variable
let displayValue = '';  
let operator = '';

// number buttons function
const numberButtons = document.querySelectorAll('.number-buttons');

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        display.textContent += button.id.slice(3);
        displayValue = display.textContent;
    });
});

// clear button
const clearButton = document.querySelector("#clear-button");

clearButton.addEventListener('click', () => {
    display.textContent = '';   
    displayValue = display.textContent;
});

//operation button saved into a variable
const operationButton = document.querySelectorAll(".operator-buttons");

operationButton.forEach(button => {
    button.addEventListener('click', () => {
        operator = button.id.slice(3);
        display.textContent = '';
        displayValue = display.textContent;
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

