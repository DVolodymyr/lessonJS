`use strict`;

class Task {
    constructor(value, time) {
        this.value = value;
        this.time = time;
    }

    static createRandomTask() {
        return new Task(Math.round(Math.random() * 10), Number((Math.random() * 10).toFixed(2)));
    }

    get efficiency() {
        return (this.value / this.time);
    }
}

const createRandomTasks = (n) => {
    let arrTasks = [];
    for (let i = 0; i < n; i++) {
        arrTasks.push(Task.createRandomTask());
    }
    return(arrTasks);
}

const sortByEfficiency = (arrTasks) => {

    const arrTasksCopy = [...arrTasks];
    console.log(arrTasksCopy);

    arrTasksCopy.sort((a, b) => {
        return(b.efficiency - a.efficiency)
    })

    return arrTasksCopy;
}
const arrTasks = createRandomTasks(+prompt(`Value?`));
console.log(arrTasks);
const sortedArrTasks = sortByEfficiency(arrTasks);

const printEfficiences = (arr) => {
  for (let a of arr) {
    console.log(a.efficiency);
  }
}

printEfficiences(sortedArrTasks);

const getTime = (sortedArrTasks, time) => {
    let timeReminder = time;
    let taskList = [];
    sortedArrTasks.forEach(element => {
        if (element.time <= timeReminder) {
            taskList.push(element);
            timeReminder -= element.time;
        }
    });

    return taskList;
}

console.log(getTime())