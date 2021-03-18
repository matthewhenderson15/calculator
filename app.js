// Global variables for selecting calculator buttons
const clearButton = document.querySelector('#clear-button');
const backspaceButton = document.querySelector('#backspace-button');
const decimalButton = document.querySelector('#decimal-button');
const numberButton = document.querySelectorAll('.number-button');
const equalButton = document.querySelector('#equal-button');
const operatorButtons = document.querySelectorAll('.operator-button');
const displayValue = document.querySelector('#display');
const tempDisplay = document.querySelector('#temp-display')

// Global variables for setting operands and operators
let operand1 = '';
let operand2 = '';
let operandList = [];
let mainOperator = null;

// Add numbers to display value on click
numberButton.forEach((button) => 
    button.addEventListener("click", function() {displayValue.textContent += button.textContent}))

// Equal function that calculates result
function equal() {
    operand2 = parseFloat(displayValue.textContent);
    tempDisplay.textContent += operand2;
    if (mainOperator === '÷' && operand2 === 0) {
        alert('Cannot divide by zero! Try again.');
        clear();
        return;
    }
    operandList.push(operand2);
    result = operate(operandList, mainOperator);
    displayValue.textContent = result;
    mainOperator = null;
    operand1 = '';
    operand2 = '';
    operandList = [];
}
equalButton.addEventListener("click", equal)

// Function for clearing display values and corresponding event listener
function clear() {
    operand1 = '';
    operand2 = '';
    operandList = '';
    displayValue.textContent = '';
    tempDisplay.textContent = '';
    mainOperator = '';
}
clearButton.addEventListener("click", clear)

// Function for backspace key for clearing previous key entry
function backspace() {
    displayValue.textContent = displayValue.textContent.slice(0, -1);
}
backspaceButton.addEventListener("click", backspace)

// For each loop and function to set the operator for each operator button
operatorButtons.forEach((button) =>
    button.addEventListener("click", function() {declareOperator(button.textContent)}))

// Function to set type of operation to be performed
function declareOperator(operator) {
    if (tempDisplay.textContent !== null) {
        tempDisplay.textContent = '';
    }
    displayValue.textContent += operator;
    tempDisplay.textContent += displayValue.textContent;
    operand1 = parseFloat(displayValue.textContent);
    operandList.push(operand1);
    if (mainOperator === null) {
        mainOperator = operator;
    }
    displayValue.textContent = '';
}

// Function to handle decimals and corresponding event listener
function decimal() {
    displayValue.textContent += decimalButton.textContent;
}
decimalButton.addEventListener("click", decimal)

// Four main operations that can be called
var operations = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "÷": divide
}

// Main operation function 
function operate(list, operator) {
    result = list.reduce(operations[operator]);
    return result;
}

// Addition function
function add(operand1, operand2) {
    return operand1 + operand2; 
}

// Subtraction function
function subtract(operand1, operand2) {
    return operand1 - operand2;
}

// Multiply function
function multiply(operand1, operand2) {
    return operand1 * operand2; 
}

// Divide function
function divide(operand1, operand2) {
    return operand1 / operand2;
}

// Keyboard support 
document.addEventListener("keypress", function (e) {
    if (e.key >= '0' && e.key <= '9') {
        displayValue.textContent += e.key;
    } else if (e.key === '=') {
        equal();
    } else if (e.key === '.') {
        displayValue.textContent += e.key;
    } else if (e.key === '+' || e.key === '-' || e.key === '/' || e.key === '*') {
        declareOperator(e.key)
    }
})
