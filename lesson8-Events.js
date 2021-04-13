`use strict`
const th = document.getElementsByTagName(`th`);
document.addEventListener(`keydown`, (event) => {
  const { code, ctrlKey, key } = event;
  event.preventDefault();
  const divElement = document.getElementById(`writeBoard`);
  const txtArea = document.getElementById(`task1-textarea`);
  if (code == `KeyE` && ctrlKey) {
    divElement.style.display = `none`;
    txtArea.style.display = `block`;
    txtArea.innerHTML = divElement.innerHTML;
  } else if (code == `KeyS` && ctrlKey) {
    divElement.style.display = `block`;
    txtArea.style.display = `none`;
    divElement.innerHTML = txtArea.innerHTML;
  } else {
    txtArea.innerHTML += key;
  }
})
//==========================================================================================
//==========================================================================================
// for (let i = 0; i < th.length; i++) {
//   th[i].addEventListener(`click`, (event) => {
//     const column = event.target.cellIndex;
//     const table = document.getElementById(`task2Table`);
//     for (let rowInd = 1; rowInd < th.length; rowInd++) {

//     }
//   })
// }