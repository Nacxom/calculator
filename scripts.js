//DOM Query Selectors
const operandBtns = document.querySelectorAll('.operand');
const operatorBtns = document.querySelectorAll('.operator');
const display = document.querySelector('.display');
const equalBtn = document.querySelector('.equal');
const clearBtn = document.querySelector('.clear');

//Event Listeners
operandBtns.forEach(operand => operand.addEventListener('click', storeOperands));
operatorBtns.forEach(operator => operator.addEventListener('click', storeOperator));
equalBtn.addEventListener('click',operate);
clearBtn.addEventListener('click',clearAll);

//Basic Math Operations Functions
const add = (operand1,operator) => operand1 + operator;
const subtract = (operand1,operator) => operand1 - operator;
const multiply = (operand1,operator) => operand1 * operator;
const divide = (operand1,operator) => {
    if(operator == 0){
        return `lmao`;
    }
    else{
    return Math.floor(operand1 / operator);
    }
}

//Global Variables
let operation = ``;
let operand = ``;
let firstOperand = ``;
let result = ``;

//Operate Function
function operate(operand1,operator,operand2){
    if(operator == `+`){
        result = add(Number(operand1),Number(operand2));
        display.textContent = result;
        operand = result;
        operation = ``;
        return result;
    } else if(operator == `*`){
        result = multiply(Number(operand1),Number(operand2));
        display.textContent = result;
        operand = result;
        operation = ``;
        return result;
    } else if(operator == `-`){
        result = subtract(Number(operand1),Number(operand2));
        display.textContent = result;
        operand = result;
        operation = ``;
        return result;
    } else if(operator == `/`){
        result = divide(Number(operand1),Number(operand2));
        display.textContent = result;
        operand = result;
        operation = ``;
        return result;
        }
    operate(firstOperand, operation, operand);
}

//Store Operands Function
function storeOperands(e){
    operand += e.target.textContent;
    display.textContent = operand;
}
//Store Operator Function
function storeOperator(e){
    if(operation == `+` || operation == `-` || operation == `*` || operation == `/`){
        operate(firstOperand, operation, operand);
    }
    firstOperand = operand;
    operand = ``;
    operation = e.target.textContent;
    display.textContent = operation;
}
//Clear All Function
function clearAll(){
    display.textContent = `0`;
    result = ``;
    firstOperand = ``;
    operand = ``;
    operation = ``;
}