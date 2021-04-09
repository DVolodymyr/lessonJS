`use strict`
$(document).ready(function () {
  $(`.buttons_button`).click(function () {
    let textArea = $(`#text-area`).html();
    let button = this.innerHTML;
    if (button == `reset`) {
      $(`#text-area`).html(`0`);
    } else if (button == `=`) {
      $(`#text-area`).html(myMath(textArea));
    } else {
      if (textArea == `0`) {
        textArea = ``;
      }
      $(`#text-area`).html(textArea + this.innerHTML);
    }
  })
})
function myMath(str) {
  return Function(`'use strict'; return (${str})`)()
}