// display 
const display = document.querySelector("#display");

// variables
let num1 = '';
let num2 = '';  
let operator = '';
let numBtnCnt = 0;
let opBtnCnt = 0;       
let eqBtnCnt = 0;       
let result = 0;         

// number button function
const numberButtons = document.querySelectorAll('.number-buttons');

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        numBtnCnt++;
        console.log(`numBtnCnt: ${numBtnCnt}`);
        if (opBtnCnt === 0) {           
            num1 += button.id.slice(3); 
            num1 = Number(num1);
            display.textContent = num1;
            console.log(`num1 is ${num1}`);
        } else if (opBtnCnt > 0) { 
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

// operator button function 
const operatorButton = document.querySelectorAll(".operator-buttons");

operatorButton.forEach(button => {
    button.addEventListener('click', () => {
        operator = button.id.slice(3);
        console.log(operator);
        console.log(`typeof num1 is ${typeof num1}: ${num1}`);
        console.log(`typeof num2 is ${typeof num2}: ${num2}`);
        if (eqBtnCnt == 0 && typeof num2 === 'number') { 
            console.log(`result inside operator function is ${typeof result}: ${result}`);
            display.textContent = result;
            num1 = Number(result);
            num2 = '';      // added this to prevent concatenation of num2 when more than 2 numbers in equation
        } else if (opBtnCnt > 0) {
            display.textContent = result;
            num1 = Number(result);
            num2 = '';
        }
        opBtnCnt++;
    })
}) 

// equal button
const equalButton = document.querySelector("#equal-button");

equalButton.addEventListener('click', () => {  
    result = operate(num1, num2, operator);         
    eqBtnCnt++;
    console.log(`eqBtnCnt is ${eqBtnCnt}`);
    console.log(`num1 is ${num1}, num2 is ${num2}`);
    console.log(`result is ${result}`);
    result = result.toString().slice(0, 10);
    display.textContent = result;
    num1 = '';       // changed this so num1 can retain result
    num2 = '';                                    
    opBtnCnt = 0; 
    numBtnCnt = 0;                                  
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

