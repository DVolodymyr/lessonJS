'use strict';
//==========================================================================================
//==========================================================================================
let arr = [];
let arrSecond = [];
//==========================================================================================
function generateRandomArray() {
  for (let i = 0; i < 10; i++) {
    arr[i] = Math.floor(Math.random() * 100);
  }
  alert(arr);
  return (arr);
}
//==========================================================================================
//==========================================================================================
const getEvenNumbers = () => {
  let arrOdd = [];
  for (let i = 1; i <= arr.length; i++) {
    if (!(i % 2)) arrOdd.push(arr[i - 1]);
  }
  alert(arrOdd);
}
//==========================================================================================
//==========================================================================================
const getSumNumbers = () => {
  const sum = arr.reduce((a, b) => a + b);
  alert(sum);
}
//==========================================================================================
//==========================================================================================
/*const getMaxNumber = () => {
  arr.sort((a, b) => b - a);
  alert(arr[0]);
}*/
const getMaxNumber = () => {
  alert(Math.max(...arr));
}
//==========================================================================================
//==========================================================================================
const addNumber = () => {
  const askIndex = + prompt(`Where do you want add the element? :`);
  const askElement = prompt(`Type the Element :`);
  if (askIndex < arr.length) {
    arr.splise(askIndex - 1, 0, askElement);
  } else {
    arr[askIndex] = askElement;
  }
  console.log(arr);
}
//==========================================================================================
//==========================================================================================
const deleteNumber = () => {
  const askIndex = + prompt(`Where do you want delete the element? :`);
  if (askIndex == 0) {
    alert(`This Element is undefined!!!`)
  } else {
    arr.splise(askIndex - 1, 1);
  }
  console.log(arr);
}
//==========================================================================================
//==========================================================================================
const generateRandomSecondArray = () => {
  for (let i = 0; i < 5; i++) {
    arrSecond[i] = Math.floor(Math.random() * 100);
  }
  alert(arrSecond);
  return arrSecond;
}
//==========================================================================================
//==========================================================================================
const getConcatArray = () => {
  let arrTogether = [...arr, ...arrSecond];
  arrTogether = arrTogether.filter((x, i, a) => a.indexOf(x) == i);
  alert(arrTogether);
}
//==========================================================================================
//==========================================================================================
const getRepeatingNumber = () => {
  /*----Cynle in Cycle-------*/
  /*let arrTogether = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arrSecond.length; j++) {
      if (arr[i] == arrSecond[j]) { arrTogether.push(arr[i]) };
    }
  }
  alert(arrTogether);*/
  let arrTogether = [...arr, ...arrSecond];
  arrResult = arrTogether.filter((x, i, a) => a.indexOf(x) != i);
  alert(arrResult);
}