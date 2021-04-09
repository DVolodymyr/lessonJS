`use strict`
class PrintMashine {
  fontSize = `14px`;
  fontColor = `black`;
  fontFamily = `Helvetica`;
  constructor() {
    this.fontSize = prompt(`What size?`);
    this.fontColor = prompt(`What color`);
    this.fontFamily = prompt(`What font`);
  }
  print() {
    const getText = prompt(`What text`);
    document.write(`<div style='font-size:${this.fontSize}px;
                                color:${this.fontColor}; 
                                font-family:${this.fontFamily}'>${getText}</div>`)
  }
}
function prinText() {
  const print = new PrintMashine;
  print.print();
}
//==========================================================================================
//==========================================================================================
class News extends PrintMashine {
  text = ``;
  title = ``;
  arrTags = [];
  date = ``;
  constructor() {
    super();
    this.text = prompt(`Type the Text`);
    this.title = prompt(`Type the title`);
    this.arrTags = this.getArrTags();
    this.date = prompt(`Type the date`);
  }
  getArrTags() {
    let _arrTags = [];
    let tag = true;
    while (tag) {
      tag = prompt(`Type the tag`);
      if (tag) _arrTags.push(tag);
    }
    return _arrTags;
  }
  priny() {
    const tags = this.arrTags.map(tag => `<li>${tag}</li>`);
    const printNews = `<h2>${this.title}</h2> <p>${this.text}</p> <ol>${tags}</ol>
    <div>${this.date}</div>`;
    const newsBlock = document.getElementById(`News`);
    newsBlock.innerHTML += `<br>${printNews}`;
  }
}
function getNews() {
  const printNews = new News;
  printNews.print();
}
//==========================================================================================
//==========================================================================================
class NewsFeed {
  newsArray = [];
  constructor() {
    this.newsArray = this.askNews();
  }
  askNews() {
    let _newsArray = [];
    do {
      const news = new News();
      _newsArray.push(news);
    } while (confirm(`Do you want to continue?`));
    return _newsArray;
  }
  get getNnewsAmount() {
    return (this.newsArray.length);
  }
  printAllNews() {
    this.newsArray.forEach(element => {
      element.print();
    })
  }
}
function printNewsFeed() {
  const newsFeed = new NewsFeed();
  newsFeed.printAllNews();
}
//==========================================================================================
//==========================================================================================
