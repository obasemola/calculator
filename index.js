const keys = document.querySelector('#calculatorKeys');
const display = document.querySelector('#calculatorDisplay');


keys.addEventListener('click', (e) => {
  if(e.target.matches('button')) {
    key = e.target;
    keyAction = key.dataset.action;
    keyNum = key.textContent;
    displayedNum = display.textContent;
    if (
      keyAction === 'add' ||
      keyAction === 'subtract' ||
      keyAction === 'divide' ||
      keyAction === 'multiply'
      ) {
        key.classList.add('pressed');
        calculator.dataset.typeOfPreviousKey = 'operator';
      }
    const keyArray = Array.from(key.parentNode.children);
    keyArray.forEach((key) => {
      key.classList.remove('pressed');
    });
    // console.log(keyAction, keyNum, displayedNum)
  }

  if(!keyAction) {
    if(displayedNum === '0') {
      display.textContent = keyNum;
    } else {display.textContent = displayedNum + keyNum}
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
    }


});

