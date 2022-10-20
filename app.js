// DATA CONTROLLER

// strore tasks that we add
const taskStore = [];

// constructor for tasks
const Task = function (id, description) {
  this.id = id;
  this.description = description;
};

// add task
function addTask(des) {
  // create new ID
  let ID;
  if (taskStore.length > 0) {
    ID = taskStore[taskStore.length - 1].id + 1;
  } else {
    ID = 0;
  }

  taskStore.length;
  // create a new task
  const newTask = new Task(ID, des);

  // push it into data structure
  taskStore.push(newTask);

  // return the new element
  return newTask;
}

// delete task
function deleteTask(id) {
  let ids, index;
  // create array for IDs
  ids = taskStore.map(function (current) {
    return current.id;
  });
  // find ids index
  index = ids.indexOf(parseInt(id));
  // delete task
  if (index !== -1) {
    taskStore.splice(index, 1);
  }
}

// UI CONTROLLER

const DOMStrings = {
  addBtn: document.querySelector(".add__btn"),
  taskDescription: document.querySelector(".add__description"),
  taskContainer: document.querySelector(".task__list"),
};

// add task to UI
function addTaskList(task) {
  let html, newHTML, element;
  // create HTML string with placeholder text
  html = `
          <div class="item clearfix" id="%id%">
          <div class="item__description">%description%</div>
          <div class="right clearfix">
              <div class="item__done">
                  <button class="item__done--btn">
                      <i class="ion-ios-checkmark-outline"></i>
                  </button>
              </div>
              <div class="item__delete">
                  <button class="item__delete--btn">
                      <i class="ion-ios-close-outline"></i>
                  </button>
              </div>
          </div>
        </div>  
        `;

  // replace the placeholder text with actual data
  newHTML = html.replace("%id%", task.id);
  newHTML = newHTML.replace("%description%", task.description);

  // insert the HTML into the DOM
  element = DOMStrings.taskContainer;
  element.insertAdjacentHTML("beforeend", newHTML);
}

// delete task from UI
function deleteListTask(selectorId) {
  let el;

  el = document.getElementById(selectorId);

  // remove html from DOM
  el.remove();
}

// APP CONTROLLER

function ctrlAddTask() {
  // get input data from dom
  const input = DOMStrings.taskDescription;
  const text = input.value;

  // check for text
  if (text) {
    // add the task to the data structure
    let newTask = addTask(text);
    // add the task to the UI
    addTaskList(newTask);
    // clear the field
    input.value = "";
    input.focus();
  }
}

function ctrlDeleteTask(event) {
  let taskId;
  // find ID
  taskId = event.target.parentNode.parentNode.parentNode.parentNode.id;

  // check is there any ID
  if (taskId) {
    //delete the task from data structure
    deleteTask(taskId);
    //delete the task from the UI
    deleteListTask(taskId);
  }
}

DOMStrings.addBtn.addEventListener("click", ctrlAddTask);

document.addEventListener("keypress", function (event) {
  if (event.keyCode === 13 || event.which === 13) {
    ctrlAddTask();
  }
});

DOMStrings.taskContainer.addEventListener("click", ctrlDeleteTask);
