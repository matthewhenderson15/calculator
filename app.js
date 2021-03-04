// Variables for testing functions
let operand1 = Math.ceil((Math.random()*10));
let operand2 = Math.ceil((Math.random()*10));

// Addition function
function add(operand1, operand2) {
    return operand1 + operand2; 
    // console.log(result);
}

// Subtraction function
function subtract(operand1, operand2) {
    return operand1 - operand2;
    // console.log(result);
}

// Multiply function
function multiply(operand1, operand2) {
    return operand1 * operand2; 
    // console.log(result);
}

// Divide function
function divide(operand1, operand2) {
    return operand1 / operand2;
}

// Four main operations that can be called
var operations = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide
}

// Performs basic operations
function operators(list, operator) {
    result = list.reduce(operations[operator]);
    return result;
}

console.log(operand1);
console.log(operators([2, 3, 4],'/'));