

const defaultResult = 0;
let currentResult = defaultResult;

function addNumber(num1, num2){
    const result = num1 + num2;
    alert('the result is '+result);
}

addNumber(20,10);
currentResult = (currentResult + 10) * 3 /2 -1;
let calculationDescription = `( ${defaultResult} + 10) * 3 /2 -1`;
let errorMessage = "An error has occur";


outputResult(currentResult, errorMessage); 