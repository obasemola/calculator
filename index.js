const keys = document.querySelector('#calculatorKeys');
const display = document.querySelector('#calculatorDisplay');

let key;
let action;
keys.addEventListener('click', (e) => {
  if(e.target.matches('button')) {
    key = e.target;
    keyAction = key.dataset.action;
    keyNum = key.textContent;
    displayedNum = display.textContent;
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