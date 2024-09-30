// display 
const display = document.querySelector("#display");

// number input, operator and operator button count variables
let num1 = '';
let num2 = '';  
let operator = '';
let numBtnCnt = 0;
let opBtnCnt = 0;       // how many times the operator button was pressed
let eqBtnCnt = 0;       // how many times the equal button was pressed ********************************************************************************
let result = 0;         // change made here. declared this variable up here instead of in the equal button function ***********

// number buttons function
// needs to clear display and then display second number when second number is pressed
const numberButtons = document.querySelectorAll('.number-buttons');

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        numBtnCnt++;
        if (opBtnCnt === 0) {           
            num1 += button.id.slice(3); 
            num1 = Number(num1);
            display.textContent = num1;
            console.log(`num1 is ${num1}`);
        } else if (opBtnCnt > 0) { 
            num2 = '';
            num2 += button.id.slice(3);
            num2 = Number(num2);
            display.textContent = num2;
            console.log(`num2 is ${num2}`);
            result = operate(num1, num2, operator);
            result = result.toString().slice(0, 10);
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
    opBtnCnt = 0;
    eqBtnCnt = 0;
    numBtnCnt = 0;
});

// function to save operater button pressed into a variable and clear display  
const operatorButton = document.querySelectorAll(".operator-buttons");

operatorButton.forEach(button => {
    button.addEventListener('click', () => {
        operator = button.id.slice(3);
        console.log(operator);
        console.log(`typeof num1 is ${typeof num1}`);
        console.log(`typeof num2 is ${typeof num2}`);
        if (eqBtnCnt == 0 && typeof num2 === 'number') { 
            // result = operate(num1, num2, operator); 
            console.log(`result inside operator function is ${typeof result}: ${result}`);
            display.textContent = result;
            num1 = Number(result);
        }      
        opBtnCnt++;
        console.log(`opBtnCnt is ${opBtnCnt}`);
    })
}) 

// equal button
const equalButton = document.querySelector("#equal-button");

equalButton.addEventListener('click', () => {  
    result = operate(num1, num2, operator);         // made change here to remove keyword let and declare this variable above ***********
    eqBtnCnt++;
    console.log(`eqBtnCnt is ${eqBtnCnt}`);
    console.log(`num1 is ${num1}, num2 is ${num2}`);
    console.log(`result is ${result}`);
    result = result.toString().slice(0, 10);
    display.textContent = result;
    num1 = '';
    num2 = '';                                    // change made here. added this counter *******************************************     // added this to verify counter  *************************************************
    opBtnCnt = 0;                                   // change made here to reset opBtnCnt to 0 ***************************************
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
    if (num2 == 0) {
        display.textContent = "Can't / 0!"; 
        return;
    }
    return num1 / num2;
}

// operate function takes 2 numbers and an operator and returns the answer
let operate = function(num1, num2, operator) {
    // num1 = Number(num1);
    // num2 = Number(num2);
    // console.log(num1);
    // console.log(num2);
    // console.log(operator);
    if (operator == 'add') {
        return add(num1, num2);
    } else if (operator == 'subtract') {
        return subtract(num1, num2);
    } else if (operator == 'multiply') {
        return multiply(num1, num2);
    } else if (operator == 'divide') {
        return divide(num1, num2);
    }
};

// console.log(operate(4, 2, subtract)); // operate function works

