

const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

//Gets input from input fields
function getUserNumberInput(){
    return parseInt(userInput.value);
}

//Generate and write calculation log
function createAndWriteOutput(operator,resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription); //from vendor js
}

function writeToLog(operationIdentifier,prevResult,operationNumber,newResult){
    const logEntry = {
        operation:operationIdentifier,
        prevResult:prevResult,
        number:operationNumber,
        result:newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
    console.log(logEntry.operation);
}

function calculateResult(calculationType){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult; 
    let mathOperator;
    if(calculationType ==='ADD'){
        currentResult += enteredNumber;
        mathOperator = '+';
    }
    
    createAndWriteOutput(mathOperator,initialResult,enteredNumber);
    writeToLog(calculationType,initialResult,enteredNumber,currentResult);
}

function addNumber(){
   calculateResult('ADD');
}

function subtract(){
    calculateResult('ADD');
}

function multiply(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*',initialResult,enteredNumber);
    writeToLog('MULTIPLY',initialResult,enteredNumber,currentResult);
}

function divide(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/',initialResult,enteredNumber);
    writeToLog('DIVIDE',initialResult,enteredNumber,currentResult);
}

addBtn.addEventListener('click', addNumber)
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);

