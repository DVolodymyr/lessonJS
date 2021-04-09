`use strict`
const playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN"
  },
  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY"
  },
  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD"
  },
  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER"
  },
  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER"
  },
  {
    author: "AC/DC",
    song: "BACK IN BLACK"
  },
  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU"
  },
  {
    author: "METALLICA",
    song: "ENTER SANDMAN"
  }
]
function getSong() {
  let list = ``;
  for (let i = 0; i < playList.length; i++) {
    list += `<li>${playList[i].author} - ${playList[i].song}</li>`
  }
  const songs = document.getElementById(`songs`);
  songs.innerHTML = `<ul>${list}</ul>`;
}
//==========================================================================================
//==========================================================================================
const getModal = () => {
  const open = document.getElementById(`modal`);
  modal.style.display = `flex`;
}
const closeModal = () => {
  const open = document.getElementById(`modal`);
  modal.style.display = `none`;
}
//==========================================================================================
//==========================================================================================
let direction = 1;
const switchLight = () => {
  const lights = document.querySelectorAll('.light')

  let index = 0
  let prev = 0

  while (true) {
    prev = index
    index = Math.abs((3 + index + direction) % 3)

    if (lights[prev].classList.contains('active')) {
      lights[prev].classList.remove('active')
      lights[index].classList.add('active')
      if (index == 0) {
        direction = 1
      } else if (index == 2) {
        direction = -1
      }
      return
    }
  }
}
//==========================================================================================
//==========================================================================================
function toggleText() {
  // const text = document.getElementsByClassName(`text`)[0];
  // text.classList.toggle(`show`);
  document.getElementsByClassName(`text`)[0].classList.toggle(`show`);
}
//==========================================================================================
//==========================================================================================
function openTab(tabName) {
  const tab = document.getElementById(tabName);
  const tabs = document.getElementsByClassName(`content_items`);
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove(`active`);
  }
  tab.classList.add(`active`);
}
//==========================================================================================
//==========================================================================================
