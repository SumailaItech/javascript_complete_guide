

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

function addNumber(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult; 
    currentResult += enteredNumber;
    createAndWriteOutput('+',initialResult,enteredNumber);
    logEntries.push(enteredNumber);
    console.log(logEntries);
    
}

function subtract(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-',initialResult,enteredNumber);
}

function multiply(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*',initialResult,enteredNumber);

}

function divide(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/',initialResult,enteredNumber);
}

addBtn.addEventListener('click', addNumber)
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);

