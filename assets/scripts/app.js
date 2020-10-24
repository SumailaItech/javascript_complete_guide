

const defaultResult = 0;
let currentResult = defaultResult;

function addNumber(num1, num2){
    const result = num1 + num2;
    return result;
}

currentResult = addNumber(20,10);

let calculationDescription = `( ${defaultResult} + 10) * 3 /2 -1`;
let errorMessage = "An error has occur";


outputResult(currentResult, errorMessage); 