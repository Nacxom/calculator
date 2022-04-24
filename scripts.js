// Operations Functions
const add = (a,b) => a + b;

const subtract = (a,b) => a - b;

const multiply = (a,b) => a * b;

const divide = (a,b) => a / b;

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
    console.log(num1);
    console.log(num2);
    console.log(operator);
    console.log(result);
}
