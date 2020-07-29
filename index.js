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

  if (
    keyAction === 'add' ||
    keyAction === 'subtract' ||
    keyAction === 'divide' ||
    keyAction === 'multiply'
    ) {
      const firstValue = parseFloat(calculator.dataset.firstValue);
      const operator = calculator.dataset.operator;
      let secondValue = parseFloat(displayedNum);

      if(
        firstValue &&
        operator &&
        typeOfPreviousKey !== 'operator') {
        const showResult = calculate(firstValue, operator, secondValue);
        console.log(showResult);
        display.textContent = showResult;
        calculator.dataset.firstValue = showResult;
      } else {
        calculator.dataset.firstValue = displayedNum;
      }

    key.classList.add('pressed');
    calculator.dataset.typeOfPreviousKey = 'operator';
    calculator.dataset.firstValue = displayedNum;
    calculator.dataset.operator = keyAction;
  }
  


  if(!keyAction) {
    if(displayedNum === '0' || typeOfPreviousKey === 'operator' || typeOfPreviousKey === 'equals') {
      display.textContent = keyNum;
      calculator.dataset.typeOfPreviousKey = 'number';
    } else
    {
      display.textContent = displayedNum + keyNum;
      calculator.dataset.typeOfPreviousKey = 'number';
    }
  }

  if (displayedNum === '0.') {
    display.textContent = displayedNum + keyNum;
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
    let secondValue = parseFloat(displayedNum);
    let firstValue = parseFloat(calculator.dataset.firstValue);
    const resultEquals = calculate(firstValue, operator, secondValue);
    display.textContent = resultEquals;
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
  return result;
}