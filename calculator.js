// buttons layout

// const createColumns = function() {
//     const column = document.createElement("div");
//     container.appendChild("column");
//     column.style.border = "5px solid black";
//     column.style.width = "25%";
//     column.style.height = "100%";
//     console.log('hello');
// }

// [1, 2, 3, 4].forEach(createColumns); 

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

// the above functions work

let firstNumber = 0;
let secondNumber = 0;
let operator = [ add, subtract, multiply, divide ];

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

// console.log(operate(4, 2, subtract));