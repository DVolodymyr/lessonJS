'use strict';

function queschions() {
  alert('ВЫ ГОТОВЫ!');
  alert('ПОГНАЛИ!!!');
  let quesch1 = +prompt('Вопрос: 2 + 2 = ?' + '\nВарианты ответа:' + '\n=8 - 1' + '\n=4 - 2' + '\n=6 - 3');
  let quesch2 = +prompt('Вопрос: У машины четыри колеса ?' + '\nВарианты ответа:' + '\nНет - 1' + '\nНе уверен - 2' + '\nДа - 3');
  let quesch3 = +prompt('Вопрос: Чебурашка друг Гены ?' + '\nВарианты ответа:' + '\nДа - 1 ' +
    '\nКто такой Гена ? - 2' + '\nНезнаю - 3');
  let score = 0;
  if (quesch1 === 2) { score += 2 };
  if (quesch2 === 3) { score += 2 };
  if (quesch3 === 1) { score += 2 };
  alert(`Ваше кол-во балов : ${score}`);
}
//==========================================================================================
//==========================================================================================
function caunt() {
  let fromNumber = +prompt('Введите начало диапазона: ');
  let toNumber = +prompt('Введите конец диапазона : ');
  let result = 0;
  let start, finish;
  if (fromNumber > toNumber) {
    start = fromNumber;
    finish = toNumber;
  } else {
    start = fromNumber;
    finish = toNumber;
  }
  /*for (let i = start; i <= finish; i++); {
      result = result + i;
    }*/
  result = (start + finish) / 2 * (finish - start + 1);
  alert('Ваш результат = ' + '' + result);
}
//==========================================================================================
//==========================================================================================
function NOD() {
  let numberOne = +prompt('Enter the first number :');
  let numberTwo = +prompt('Enter the second number :');
  numberOne = Math.abs(numberOne);
  numberTwo = Math.abs(numberTwo);
  while (numberOne != 0 && numberTwo != 0) {
    if (numberOne > numberTwo) {
      numberOne = numberOne % numberTwo
    } else {
      numberTwo = numberTwo % numberOne
    }
  }
  alert('Ваш результат :' + ' ' + (numberOne + numberTwo));
}
//==========================================================================================
//==========================================================================================
function allDividers() {
  let number = +prompt('Type the number');
  number = Math.abs(number);
  let result = '';
  for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
      result = result + `${i},  `;
    }
  }
  alert(result);
}
//==========================================================================================
//==========================================================================================
function numberLength() {
  let number = prompt(' Type of the number');
  number = String(Math.abs(number));
  alert(number.length);
}
//==========================================================================================
//==========================================================================================
function typeOfNumbers() {
  let numbers = [];
  let positive = 0;
  let negative = 0;
  let odd = 0;
  let even = 0;
  let zero = 0;
  for (i = 1; i <= 10; i++) {
    number = +prompt(`type the number: ${i}`);
    /*if (number > 0) {
      positive = positive + 1;
    } else if (number < 0) {
      negative = negative + 1;
    } else if (number === 0) {
      zero = zero + 1;
    };
    if (number % 2) {
      even = even + 1;
    } else { odd = odd + 1 };*/
    number > 0 ? positive = positive + 1 :
      number < 0 ? negative = negative + 1 :
        number === 0 ? zero = zero + 1 :
          number % 2 ? even = even + 1 : odd = odd + 1
  }
  let massege = `The count of positive: ${positive}<br>
                  The count of negative: ${negative}<br>
                    The count of zero's: ${zero}<br>
                      The count of odds: ${odd}<br>
                        The count of evens: ${even}.`
  const text = document.getElementById('text');
  text.innerHTML = massege;
}
//==========================================================================================
//==========================================================================================
function calculator() {
  let repeat = true;
  do {
    const askNumberOne = +prompt('type the number:');
    const askNumberTwo = +prompt('type the nubmer:');
    const askSing = +prompt('Type the sing:');
    /*  askSing == '+' ? (askNumberOne + askNumberTwo) :
          askSing == '-' ? (askNumberOne - askNumberTwo) :
            askSing == '*' ? (askNumberOne * askNumberTwo) :
              askSing == '/' ? (askNumberOne / askNumberTwo) : */
    alert(eval(askNumberOne + askSing + askNumberTwo));
    repeat = confirm('Do you want to continue ?');
  } while (repeat);
}
//==========================================================================================
//==========================================================================================
function sliceString() {
  const number = prompt('Type the number:');
  const shiftDigits = prompt('Enter the digit');
  let result = number.slice(shiftDigits) + number.slice(0, shiftDigits);
  alert(result);
}
//==========================================================================================
//==========================================================================================
function dayOfWeek() {
  let repeat = true;
  let i = 0;
  do {
    const days = ['Sunday', 'Monday', 'Tuesday',
      'Wenesday', 'Thurday', 'Friday', 'Saturday'];
    repeat = confirm(`${days[i]}\n Do you want to continue ?`);
    i = ++i % days.length;
  } while (repeat);
}
//==========================================================================================
//==========================================================================================
function powerNumber() {
  let text = document.getElementById('table');
  for (let i = 2; i <= 9; i++) {
    for (let n = 1; n <= 10; n++) {
      text.innerHTML += `${i} * ${n} = ${i * n}<br>`;
    }
    text.innerHTML += `<br>`
  }
}
//==========================================================================================
//==========================================================================================
function game() {
  alert('Mind the number 0 - 100');
  let number = 100;
  let from = 0;
  let to = 100;
  while (true) {
    number = Math.floor((from + to) / 2)
    if (confirm(`Is equal = to ${number}`)) {
      alert('Well Done!!!');
      return
    }
    if (confirm(`Is equal < to ${number}`)) {
      to = number - 1
      continue
    }
    if (confirm(`Is equal > to ${number}`)) {
      from = number + 1
      continue
    }
  }
}