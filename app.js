// DATA CONTROLLER

// UI CONTROLLER

const DOMStrings = {
  addBtn: document.querySelector(".add__btn"),
  taskDescription: document.querySelector(".add__description"),
};

// APP CONTROLLER

function ctrlAddTask() {
  // get input data from dom
  const input = DOMStrings.taskDescription;
  const text = input.value
  console.log(text);
  // add the task to the data structure
  // add the task to the UI
  // clear the field
}

DOMStrings.addBtn.addEventListener("click", ctrlAddTask);

document.addEventListener("keypress", function (event) {
  if (event.keyCode === 13 || event.which === 13) {
    ctrlAddTask();
  }
});
