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

  const typeOfPreviousKey = calculator.dataset.typeOfPreviousKey;

  if(!keyAction) {
    if(displayedNum === '0' || typeOfPreviousKey === 'operator' || typeOfPreviousKey === 'equals') {
      display.textContent = keyNum;
      calculator.dataset.typeOfPreviousKey = '';
    } else
    {
      display.textContent = displayedNum + keyNum;
      calculator.dataset.typeOfPreviousKey = '';
    }
  }

  if (!keyAction) {
    
  }
  
  if (keyAction === "decimal") {
    if(!displayedNum.includes('.')) {
      display.textContent = displayedNum + '.';
    }
  }

  if (keyAction === 'decimal') {
    if (typeOfPreviousKey === 'operator') {
      display.textContent = '0.'
    }
  }

  if(keyAction === 'clear') {
    display.textContent = '0';
  }

  if (keyAction === 'equals') {
    const operator = calculator.dataset.operator;
    const secondValue = displayedNum;
    const firstValue = calculator.dataset.firstValue;
    calculate(parseFloat(firstValue), operator, parseFloat(secondValue));
    calculator.dataset.typeOfPreviousKey = 'equals';
  }

});



const calculate = (n1, operator, n2) => { 
  let result = '';
  if (operator === 'add') {
    result = parseFloat(n1 + n2);
  } else if (operator === 'subtract') {
    result = parseFloat(n1 - n2);
  } else if (operator === 'multiply') {
    result = parseFloat(n1 * n2);
  } else if (operator === 'divide') {
    result = parseFloat(n1 / n2)
  }

  display.textContent = result;
  
}