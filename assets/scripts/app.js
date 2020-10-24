

const defaultResult = 0;
let currentResult = defaultResult;

function addNumber(){
    currentResult = currentResult + parseInt(userInput.value);
    outputResult(currentResult, ''); 
}

addBtn.addEventListener('click', addNumber)

