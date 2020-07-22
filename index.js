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
    console.log(keyAction, keyNum, displayedNum)
  }

  // if(!action) {
  //   console.log(e.target.textContent)
  // }

});