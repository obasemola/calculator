const keys = document.querySelector('#calculatorKeys');
const display = document.querySelector('#calculatorDisplay');
const calculator = document.querySelector('#calculator');

keys.addEventListener('click', (e) => {
  if(e.target.matches('button')) {
    key = e.target;
    keyAction = key.dataset.action;
    keyNum = key.textContent;
    displayedNum = display.textContent;
      

    const keyArray = Array.from(key.parentNode.children);
    console.log(keyArray);
    keyArray.forEach((k) => {
      k.classList.remove('pressed');
    });
    // console.log(keyAction, keyNum, displayedNum)
  }
  const typeOfPreviousKey = calculator.dataset.typeOfPreviousKey;

  if(!keyAction) {
    if(displayedNum === '0' || typeOfPreviousKey === 'operator') {
      display.textContent = keyNum
    } else
    {
      display.textContent = displayedNum + keyNum
    }
  }
  
  if (keyAction === "decimal") {
    display.textContent = displayedNum + '.';
  }

  if(keyAction === 'clear') {
    display.textContent = '';
  }

  if (
    keyAction === 'add' ||
    keyAction === 'subtract' ||
    keyAction === 'divide' ||
    keyAction === 'multiply'
    ) {
      key.classList.add('pressed');
      calculator.dataset.typeOfPreviousKey = 'operator';
      calculator.dataset.firstValue = displayedNum;
      calculator.dataset.operator = keyAction;
    }

  if (keyAction === 'equals') {
    const operator = calculator.dataset.operator;
    const secondValue = displayedNum;
    const firstValue = calculator.dataset.firstValue;
    calculate(firstValue, operator, secondValue);
  }

});



const calculate = (n1, operator, n2) => { 
  let result = '';
  if (operator === 'add') {
    result = n1 + n2
  } else if (operator === 'subtract') {
    result = n1 - n2
  } else if (operator === 'multiply') {
    result = n1 * n2
  } else if (operator === 'divide') {
    result = n1 / n2
  }

  console.log(result);
  
}