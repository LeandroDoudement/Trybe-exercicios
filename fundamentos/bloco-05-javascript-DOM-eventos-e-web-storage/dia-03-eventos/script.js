function createDaysOfTheWeek() {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();
//1
let decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
function createDaysOfTheMonth() {
  ulDays = document.getElementById('days');
  for (let i = 0; i < decemberDaysList.length; i++) {
    listItems = document.createElement('li');
    listItems.innerHTML = decemberDaysList[i];
    listItems.className = 'day';
    if (decemberDaysList[i] === 24 || decemberDaysList[i] === 31) {
      listItems.className = 'day holiday';
    }
    if (
      decemberDaysList[i] === 4 ||
      decemberDaysList[i] === 11 ||
      decemberDaysList[i] === 18 ||
      decemberDaysList[i] === 25
    ) {
      listItems.className = 'day friday';
    }
    if (decemberDaysList[i] === 25) {
      listItems.className = 'day holiday friday';
    }
    ulDays.appendChild(listItems);
  }
}
createDaysOfTheMonth();
//2
function createHolidaysButton(buttonName) {
  let holidayButton = document.createElement('button');
  let holidayButtonID = 'btn-holiday';
  holidayButton.innerHTML = buttonName;
  holidayButton.id = holidayButtonID;
  divButtonsContainer = document.getElementsByClassName('buttons-container')[0];
  divButtonsContainer.appendChild(holidayButton);
}
createHolidaysButton('Feriados');

//3
function displayHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday');
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'green';

  getHolidayButton.addEventListener('click', function () {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  });
}
displayHolidays();

//4

function createFridayButton(buttonName) {
  let fridayButton = document.createElement('button');
  fridayButton.id = 'btn-friday';
  fridayButton.innerHTML = buttonName;
  divButtonsContainer.appendChild(fridayButton);
}

createFridayButton('Sexta-Feira');

//5
function changeFridayText(fridaysArray) {
  let friday = document.querySelectorAll('.friday');
  let newFridayText = 'Sextou O/';
  let getFridayButton = document.querySelector('#btn-friday');
  getFridayButton.addEventListener('click', function () {
    for (let i = 0; i < friday.length; i++) {
      if (friday[i].innerHTML !== newFridayText) {
        friday[i].innerHTML = newFridayText;
      } else {
        friday[i].innerHTML = fridaysArray[i];
      }
    }
  });
}

let decemberFridays = [4, 11, 18, 25];
changeFridayText(decemberFridays);

//6

function dayMouseOver() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseover', function (event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  });
}

function dayMouseOut() {
  let days = document.querySelector('#days');
  days.addEventListener('mouseout', function (event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  });
}

dayMouseOver();
dayMouseOut();

//7

function addTask(newTask) {
  let task = document.createElement('span');
  let divMyTasks = document.getElementsByClassName('my-tasks')[0];
  task.innerHTML = newTask;
  divMyTasks.appendChild(task);
}
addTask('Estudar DOM');

//8

function addSubtitleAndColor(cor) {
  let divMyTasks = document.getElementsByClassName('my-tasks')[0];
  let newTask = document.createElement('div');
  newTask.className = 'task';
  newTask.style.backgroundColor = cor;
  divMyTasks.appendChild(newTask);
}

addSubtitleAndColor('blue');

//9

function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');
  myTasks.addEventListener('click', function (event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
}

setTaskClass();

//10

function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;

  days.addEventListener('click', function (event) {
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
}

setDayColor();

//Bônus

function addCommitments() {
  let taskInput = document.getElementById('task-input');
  let buttonAdd = document.getElementById('btn-add');
  let getTaskList = document.querySelector('.task-list');

  buttonAdd.addEventListener('click', function () {
    if (taskInput.value.length > 0) {
      let newCommitment = document.createElement('li');
      newCommitment.innerHTML = taskInput.value;
      getTaskList.appendChild(newCommitment);
      taskInput.value = '';
    } else {
      alert('Erro: Digite ao menos um caractere');
    }
  });

  taskInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter' && taskInput.value.length > 0) {
      let newCommitment = document.createElement('li');
      newCommitment.innerHTML = taskInput.value;
      getTaskList.appendChild(newCommitment);
      taskInput.value = '';
    }
  });
}

addCommitments();
