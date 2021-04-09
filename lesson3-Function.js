'use strict';
//==========================================================================================
//==========================================================================================
function showResult() {
  alert('Нужно ввести 2а числа!!!');
  let firstNumber = +prompt('Введите первое число : ');
  let secondNumber = +prompt('Введите второе число : ');
  firstNumber < secondNumber ? alert('Результат : - 1 ') :
    firstNumber > secondNumber ? alert('Результат : 1 ') :
      firstNumber = secondNumber ? alert('Результат : 0 ') : ''
}
//==========================================================================================
//==========================================================================================
function factorial() {
  let inputNumber = prompt('Please enter an integer');
  let total = 1;
  for (i = 0; i <= inputNumber; i++) {
    total = total * (inputNumber - i);
    alert(inputNumber + '! = ' + total);
  }
}
//==========================================================================================
//==========================================================================================
function threeNumber() {
  let firstNumber = +prompt('Введите первое число :');
  let secondNumber = prompt('Введите первое число :');
  let thirdNumber = prompt('Введите первое число :');
  alert(firstNumber + secondNumber + thirdNumber);
}
//==========================================================================================
//==========================================================================================
function askNumbers(amount) {
  let inputNum = [];
  for (let i = 1; i <= amount; i++) {
    inputNum.push(+prompt('Enter the number please : '));
  }
  return inputNum;
}
//==========================================================================================
//==========================================================================================
function lessNumber() {
  const inPut = askNumbers(2);
  (inPut[0] < inPut[1])
    ? alert(`The less is ${inPut[0]}`)
    : alert(`The less is ${inPut[1]}`);
}
//==========================================================================================
//==========================================================================================
function powerNum() {
  const inPut = askNumbers(2);
  alert(`Your result is :  ${Math.pow(inPut[0], inPut[1])}`);
}
//==========================================================================================
//==========================================================================================
function isPrime() {
  const inPut = askNumbers(1);
  const val = Math.sqrt(inPut[0]);
  for (let i = 2; i <= val; i++) {
    if (inPut[0] % i === 0) {
      alert(`This isn't prime number`);
      return;
    };
  };
}
//==========================================================================================
//==========================================================================================
function getRest() {
  const inPut = askNumbers(2);
  const division = inPut[0] / inPut[1];
  const rounDivision = Math.floor(division);
  const rest = inPut[0] - inPut[1] * rounDivision;
  alert(`The rest is ${rest}`);
}
//==========================================================================================
//==========================================================================================
function askSeveralNums() {
  let buf;
  let userInp = [];
  do {
    buf = prompt('Type a number please: ');
    if (buf !== null) userInp.push(parseInt(buf));
  } while (buf !== null);
  return userInp;
}
//==========================================================================================
//==========================================================================================
function getArr() {
  alert(sum(...askSeveralNums()));
}
//==========================================================================================
//==========================================================================================
function sum(...arr) {
  return arr.reduce((priv, current) => {
    return priv + current;
  });
}
// ------- ANDREW WAY ------
//function getSum() {
//  let arr = [];
//  for (let i = 0; i < 5; i++) {
//    let input = +prompt('Type the number :');
//    if (input == undefined) continue;
//    else {
//      arr.push(input)
//    };
//  }
//  return arr;
//}
//function getSum() {
//  const arr = getArr();
//  alert(arr.reduce((a, b) => a + b));
//}
//==========================================================================================
//==========================================================================================

