'use strict';
//==========================================================================================
//==========================================================================================
function checkAge() {
  const age = +prompt('Enter age please:');
  if (age >= 0 && age <= 12) {
    alert('This is child');
  } else if (age > 12 && age <= 18) {
    alert('This is teenager');
  } else if (age > 18 && age <= 60) {
    alert('This is adult');
  } else if (age > 60 && age <= 110) {
    alert('This is elder');
  } else {
    alert('This is wrong value');
  }
}
//==========================================================================================
//==========================================================================================

function findSymbol() {
  const number = +prompt('Select number on keyboard:');
  let message = '';
  switch (number) {
    case 1:
      message = '!';
      break;
    case 2:
      message = '@';
      break;
    case 3:
      message = '#';
      break;
    case 4:
      message = '$';
      break;
    case 5:
      message = '%';
      break;
    case 6:
      message = '^';
      break;
    case 7:
      message = '&';
      break;
    case 8:
      message = '*';
      break;
    case 9:
      message = '(';
      break;
    case 0:
      message = ')';
      break;
    default:
      message = `This isn't a number`;
  }
  alert(`Symbol you pressed: ${message}`);
}
//==========================================================================================
//==========================================================================================

function findSymbolNormal() {
  const number = +prompt('Select number on keyboard:');
  const symbols = [')', '!', '@', '#', '$', '%', '^', '&', '*', '('];
  if (isFinite(number)) {
    alert(`Symbol you pressed: ${symbols[number]}`);
  } else {
    alert(`This isn't a number`);
  }
}
//==========================================================================================
//==========================================================================================
function sameNums() {
  const number = prompt('Enter 3-number value:');
  if (number.length === 3 && isFinite(number)) {
    if (number[0] === number[1] || number[1] === number[2] || number[2] === number[0]) {
      alert('The same numbers detected!');
    } else {
      alert('No matches found');
    }
  }
  else {
    alert('Wrong value!')
  }
}
//==========================================================================================
//==========================================================================================

function sameNums1() {
  const number = prompt('Enter 3-number value:');
  if (number.length === 3 && isFinite(number)) {
    //let newNumber = number => {return [...new Set(number)].join('')};
    let newNumber = (number => [...new Set(number)].join(''))();
    if (number !== newNumber) {
      alert('The same numbers detected!');
    }
    else {
      alert('No matches found');
    }
  }
  else {
    alert('Wrong value!')
  }
}
//==========================================================================================
//==========================================================================================
function leapYear() {
  const year = prompt('Enter year:');
  if (year % 400 && ((year % 4) && (year % 100))) {
    alert('This is ordinary year');
  } else {
    alert('This is leap year');
  }
}
//==========================================================================================
//==========================================================================================
