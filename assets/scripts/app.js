

const defaultResult = 0;
let currentResult = defaultResult;

function addNumber(){
    currentResult = currentResult + userInput.value;
    outputResult(currentResult, ''); 
}

addBtn.addEventListener('click', addNumber)

