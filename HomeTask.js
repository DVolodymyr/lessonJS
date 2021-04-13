'use strict';
//==========================================================================================
//==========================================================================================
function S_perimeter() {
  const numb = askNumbers(2);
  numb[0] > numb[1] ? alert('S Rectangle =' + ' ' + (numb[0] * numb[1])) :
    numb[1] > numb[0] ? alert('S Rectangle =' + ' ' + (numb[0] * numb[1])) :
      numb[0] != '' ? alert('Perimeter =' + ' ' + (numb[0] * 4)) :
        numb[1] != '' ? alert('Perimeter =' + ' ' + (numb[1] * 4)) :
          numb[0] === numb[1] ? alert('Thi is square & Perimeter =' + ' ' + ((numb[0] + numb[1]) * 2)) : ''
}
//==========================================================================================
//==========================================================================================
function perfectNumber() {
  const num = askNumbers(1);
  let sum = 0;
  let remainder;
  for (let i = 1; i < num - 1; i++) {
    remainder = num % i;
    if (remainder === 0) {
      sum += i;
    }
  }
  if (num === sum) {
    alert(num + ` ` + ` - This is Perferct Number!`);
  } else {
    alert(`Ooopss!!! This is not Perferct Number!`);
  }
}
//==========================================================================================
//==========================================================================================
function getPerfectNumber() {
  let m = +prompt('Enter the Min : ');
  let M = +prompt('Enter the Max : ');
  const perfects = [];
  for (let i = m; i <= M; i++) {
    perfectNumber.push(i);
  }
  return perfects;
}
//==========================================================================================
//==========================================================================================
function clock() {
  let how = prompt(`Enter the hours (HH): `);
  let minut = prompt(`Enter the minutes (MM):`);
  let sec = prompt(`Enter the seconds (SS): `);
  if (how != '' && how < 10) { how = '0' + how } else { how = how };
  if (how === '') { how = '00' };
  if (minut != '' && minut < 10) { minut = '0' + minut } else { minut = minut };
  if (minut === '') { minut = '00' };
  if (sec != '' && sec < 10) { sec = '0' + sec } else { sec = sec };
  if (sec === '') { sec = '00' };
  let time = (how + ':' + minut + ':' + sec);
  alert(time);
}
//==========================================================================================
//==========================================================================================
/*Pasha's hint
function clock() {
  let h = +prompt('Hours: ') % 24
  let m = +prompt('Minuts: ') % 60
  let s = +prompt('SecondsP: ') % 60
  //convert to valid string
  h = (h < 10) ? "0" + h : h
  m = (m < 10) ? "0" + m : m
  s = (s < 10) ? "0" + s : s
  alert(h + ' : ' + m + ' : ' + s)
}*/
//==========================================================================================
//==========================================================================================
function manySecond() {
  let how = +prompt(`Enter the hours (HH): `);
  let minut = +prompt(`Enter the minutes (MM):`);
  let sec = +prompt(`Enter the seconds (SS): `);
  let mSec;
  mSec = ((how * 3600) + (minut * 60) + sec);
  alert(mSec);
}
//==========================================================================================
//==========================================================================================
function secondsToHours() {
  let seconds = prompt(`Enter the Seconds: `);
  let howers = Math.round((seconds - (seconds % 3600)) / 3600);//how many times hours in seconds
  let minutes = Math.round((seconds - (3600 * howers)) / 60);//how many minutes are left 
  let remainingSeconds = Math.round((seconds - (3600 * howers)) - (minutes * 60));
  if (howers === 0) { howers = `00` };
  if (howers < 10) { howers = `0` + howers };
  if (minutes === 0) { minutes = `00` };
  if (remainingSeconds <= 0) { remainingSeconds = `00` };
  alert(`<<` + ` ` + howers + `:` + minutes + `:` + remainingSeconds + ' ' + `>>`);
}
//==========================================================================================
//==========================================================================================
// function twoDates() {
//   let firstDateDay = +prompt(`Enter the day of first date  : `);
//   let firstDateMonth = +prompt(`Enter the month of first date : `);
//   let firstDateYear = +prompt(`Enter the year of first date : `);
//   let secondDateDay = +prompt(`Enter the day of second date  : `);
//   let secondDateMonth = +prompt(`Enter the month of second date : `);
//   let secondDateYear = +prompt(`Enter the year of second date : `);
//   let dateDifference = ((Math.abs(firstDateDay - secondDateDay)) + `:` + (12 - (Math.abs(firstDateMonth - secondDateMonth))) + `:` + (Math.abs(firstDateYear - secondDateYear)));
//   alert(dateDifference);
// }
//==========================================================================================
//==========================================================================================
let car = {
  brand: `Bugatti Automobiles`,
  model: `Crion`,
  year: 2021,
  averageSpeed: 200,
};
console.log(car);
//==========================================================================================
function carInformation(car) {
  let info = '';
  for (let i in car) {
    info += i + ' ' + ':' + ' ' + car[i] + '\n';
  }
  alert(info);
}
//==========================================================================================
//==========================================================================================
function timing() {
  let D = +prompt(`Enter the distance in km : `);
  let time = D / car.averageSpeed;
  let interval = Math.round(time / 4);
  if (time > 4) { time = time + interval };
  alert(`You need's a` + ' ' + time + ' ' + `howers!!!`);
}
//==========================================================================================
//==========================================================================================
const fractions = {
  upOne: 0,
  downOne: 0,
  upTwo: 0,
  downTwo: 0,
  update(upOne, downOne, upTwo, downTwo) {
    this.downOne = downOne;
    this.upOne = upOne;
    this.downTwo = downTwo;
    this.upTwo = upTwo;
  },
};
const createFractions = () => {
  const upOne = +prompt(`First numerator`);
  const downOne = +prompt(`First denominator`);
  const upTwo = +prompt(`Second numerator`);
  const downTwo = +prompt(`Second denominator`);

  fractions.update(upOne, downOne, upTwo, downTwo);
  alert(`First fraction: ${upOne}/${downOne}\nSecond fraction: ${upTwo}/${downTwo}`);
};
//==========================================================================================
function Fraction1(upOne, downOne) {
  return { numerator1: upOne, denominator1: downOne };
}
function Fraction2(upTwo, downTwo) {
  return { numerator2: upTwo, denominator2: downTwo };
}
let firstFraction = Fraction1(numerator1, denominator1);
let secondFraction = Fraction2(numerator2, denominator2);
function multiFraction(obj1, obj2) {
  let resultNumerator = obj1.numerator1 * obj2.numerator2;
  let resultDenominator = obj1.denominator1 * obj2.denominator2;
  alert(`${resultNumerator}/${resultDenominator}`);
}
multiFraction(firstFraction, secondFraction);
//==========================================================================================
//==========================================================================================

// DONE 1. Создать HTML - страницу с кнопкой Like, при нажатии на которую увеличивается счетчик лайков.
// DONE 2. Создать HTML - страницу с любым содержимым и запретить пользователю выделять текст и вызывать контекстное меню кликом правой кнопки.
// 3. Создать рабочий TODO список.
// При клике на “Add” пункт добавляется в секцию TODO, при нажатии на чекбокс, пункт перемещается в поле “Completed”.Edit / Delete редактирует и удаляет пункт.

let clicks = 0;
function onClick() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
};

//==========================================================================================
//==========================================================================================
