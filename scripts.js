//DOM Query Selectors
const numBtns = document.querySelectorAll('div.numBtns button');
const operatorBtns = document.querySelectorAll('div.operatorBtns button');
const equalBtn = document.querySelector('#equal');
const clearBtn = document.querySelector('#clear');
let display = document.querySelector('#display');

// Basic Math Operations Functions
const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;

//Operate Function
let operate = (num1,num2,operator) => {
    if(operator == `addOperator`) {
        result = add(num1,num2);
    } else if (operator == `subtractOperator`) {
        result = subtract(num1,num2);
    } else if (operator == `multiplicationOperator`) {
        result = multiply(num1,num2);
    } else if (operator == `divisionOperator`) {
        result = divide(num1,num2);
    }
    console.log(`num1:${num1},\noperator:${operator},\nnum2:${num2},\nresult:${result},\noperatorPressed:${operatorPressed}`);

    displayFunction(result);
}
// Global Variables
let operatorPressed = false;
let num1 = 0;
let num2 = 0;
let operator;
let result;


//Store Num Function
let storeNum = (e) => {
    if (operatorPressed) {
        num2 = Number(`${num2}${e.target.value}`);
        displayFunction(num2);
    } else {
        num1 = Number(`${num1}${e.target.value}`);
        displayFunction(num1);
    }
}

//Display Function
let displayFunction = (num) => {
    display.textContent = num;
}

//Clear Display Function
let clearDisplay = () => {
    num1 = 0;
    num2 = 0;
    operatorPressed = false;
    display.textContent = 0;
}


//Store Operator Function
let storeOperator = (e) => {
    if(operatorPressed === false) {
        operatorStatus();
    }
    operator = `${e.target.id}`;
}

//Operator Status Changer Function
let operatorStatus = () => {
    if (operatorPressed === false) {
        operatorPressed = true;
    } else {
        operatorPressed = false;
    }
}

//Event Listeners
numBtns.forEach(button => button.addEventListener('click', storeNum));
operatorBtns.forEach(button => button.addEventListener('click', storeOperator));
equalBtn.onclick = () => operate(num1,num2,operator);
clearBtn.addEventListener('click', clearDisplay);




