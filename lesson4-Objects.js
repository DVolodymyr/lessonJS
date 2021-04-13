'use strict';
//==========================================================================================
//==========================================================================================
let rectangle = {
  topLeftX = 0,
  topLeftY = 10,
  bottomRightX = 15,
  bottomRightY = 0,
  modify(topX, topY, bottomX, bottomY) {
    this.topLetfX = topX;
    this.topLeftY = topY;
    this.bottomRightX = bottomX;
    this.bottomRightY = bottomY;
    return this;
  },
}
function createRectangle() {
  const topX = +prompt(`Enter top left X-coord : `);
  const topY = +prompt(`Enter top left Y-coord : `);
  const bottomX = +prompt(`Enter bottom right X-coord : `);
  const bottomY = +prompt(`Enter bottom right Y-coord : `);
  let rect = rectangle.modify(topLX, topLY, bottomRX, bottomRY);
  console.log(rect);
}
//==========================================================================================
//==========================================================================================

function describeRect() {
  alert(`Your rectangle:\n
  - ${rectangle.topLeftX}\n)
  - ${rectangle.topLeftY}\n)
  - ${rectangle.bottomRightX}\n)
  - ${rectangle.bottomRightY}\n`);
}
//==========================================================================================
//==========================================================================================
//==========================================================================================

function getRectWidth() {
  const rectangleWidth = rectangle.bottomRightX - rectangle.topLeftX;
  return rectangleWidth;
}
//==========================================================================================
//==========================================================================================

function getRectHeight() {
  const rectangleHeight = rectangle.topLeftY - rectangle.bottomRightY;
  return rectangleHeight;
}
//==========================================================================================
//==========================================================================================

function getRectArea() {
  return (getRectWidth() * getRectHeight());
}
//==========================================================================================
//==========================================================================================

function getRectPerimeter() {
  return 2 * (getRectWidth() + getRectHeight());
}
//==========================================================================================
//==========================================================================================

function chageWidth() {
  const widthDelta = +prompt(`How much change width? : `);
  rectangle.bottomRightX += widthDelta;
}
//==========================================================================================
//==========================================================================================

function chageHeight() {
  const heightDelta = +prompt(`How much change height? : `);
  rectangle.topLeftY += heightDelta;
}
//==========================================================================================
//==========================================================================================

function changeSize() {
  chageWidth();
  chageHeight();
  describeRect();
}
//==========================================================================================
//==========================================================================================

function moveRectX() {
  const moveDeltaX = +prompt(` Hiw much move rectangle by X-axis? : `);
  rectangle.topLeftX += moveDeltaX;
  rectangle.bottomRightX += moveDeltaX;
  describeRect();
}
//==========================================================================================
//==========================================================================================

function moveRectY() {
  const moveDeltaY = +prompt(` Hiw much move rectangle by Y-axis? : `);
  rectangle.topLeftY += moveDeltaY;
  rectangle.bottomRightY += moveDeltaY;
  describeRect();
}
//==========================================================================================
//==========================================================================================
function isInsideRect() {
  const pointX = +prompt(`Enter poin X coordinate :`);
  const pointY = +prompt(`Enter poin Y coordinate :`);
  if (
    (pointX >= rectangle.topLeftX)
    && (pointX <= rectangle.bottomRightX)
    && (pointY <= rectangle.topLeftY)
    && (pointY >= rectangle.bottomRightY)
  ) {
    alert(`Your point is inside rectangle!`);
  } else {
    alert(`Your point outside rectangle!`);
  };
}
//==========================================================================================
//==========================================================================================
