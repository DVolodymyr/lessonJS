'use strict';
//==========================================================================================
//==========================================================================================
function age() {
  let age = prompt('Введите возраст:')
  switch (true) {
    case age >= 0 && age <= 12:
      alert('Вы, ребёнок!');
      break;
    case age >= 13 && age <= 18:
      alert('Вы, подросток!');
      break;
    case age >= 19 && age <= 60:
      alert('Вы, взрослый!');
      break;
    case age >= 61 && age <= 120:
      alert('Вы, пенсионер!');
      break;
    case age >= 121 && age <= 200:
      alert('ТЫ ЧТО ТАКОЕ?!!!');
      break;
  }
}
//==========================================================================================
//==========================================================================================
function answer() {
  let answer = prompt('Введите число 0 - 9:')
  answer < '1' ? alert(' ) ') :
    answer == '1' ? alert(' ! ') :
      answer == '2' ? alert(' @ ') :
        answer == '3' ? alert(' # ') :
          answer == '4' ? alert(' $ ') :
            answer == '5' ? alert(' % ') :
              answer == '6' ? alert(' ^') :
                answer == '7' ? alert(' & ') :
                  answer == '8' ? alert(' * ') :
                    answer == '9' ? alert(' ( ') : ''
}
//==========================================================================================
//==========================================================================================
function discount() {
  let sum = prompt('Введите сумму покупки:');
  let discontMin = (sum * 0.03);
  let discontMedium = (sum * 0.05);
  let discontMax = (sum * 0.07);
  let massege = 'Ваша сумма со скидкой ';
  if (sum >= 200 && sum <= 300) {
    alert(massege + '3%' + ' = ' + (sum - discontMin));
  } else if (sum > 300 && sum <= 500) {
    alert(massege + '5%' + ' = ' + (sum - discontMedium));
  } else if (sum > 500) {
    alert(massege + '7%' + ' = ' + (sum - discontMax));
  } else if (sum < 200) {
    alert('Минимальная сумма для скидки 200!!!')
  }
}
//==========================================================================================
//==========================================================================================
function palindrome() {
  const number = prompt('Введите 5ти значное число:');
  if (number.length === 5 && isFinite(number)) {
    if (number[0] === number[4] && number[1] === number[3] && number[2] === number[2] &&
      number[3] === number[1] && number[4] === number[0]) {
      alert('Это ПАЛИНДРОМ!!!');
    } else {
      alert('Не Палиндром!');
    }
  } else {
    alert('ВНИМАТЕЛЬНЕЕ!');
  }
}
//==========================================================================================
//==========================================================================================
function сonverter() {
  alert('W E L C O M E !');
  let usd = +prompt('Кол-во USD для обмена?:');
  let choisee = prompt('Валюта обмена EUR, UAH, AZN?');
  let eur = 0.84;
  let uah = 27.72;
  let azn = 1.70;
  let message = 'Кол-во Выбраной валюты : ';
  if (choisee != "") {
    choisee.toLowerCase() == "eur" ? alert(message + (usd * eur).toFixed(2)) :
      choisee.toLowerCase() == "uah" ? alert(message + (usd * uah).toFixed(2)) :
        choisee.toLowerCase() == "azn" ? alert(message + (usd * azn).toFixed(2)) :
          alert("УТОЧНИТЕ ВЫБОР!!!");
  }
}
//==========================================================================================
//==========================================================================================
function circleToSquare() {
  alert('Сейчас как посчитаю 8)');
  let val1 = +prompt('Введите длину окружности : ');
  let val2 = +prompt('Введите периметр квадрата : ');
  let val3 = (val1 / 2 / 3.14);
  let val4 = (val2 / 2);
  if (isFinite(val1, val2)) val4 > val3 ? alert('Ура, Входит!!!') : alert('Увы и Ах!!');
}
