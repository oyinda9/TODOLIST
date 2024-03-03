
const taskList = [];

const addButtonElement = document.getElementById("addTASK");
const taskListElement = document.getElementById("Taskdiv");
const taskDoneElement=document.getElementById("taskDone");
const taskUndoneElement=document.getElementById("taskUndone");
const todayDateElement=document.getElementById("mydate");

addButtonElement.addEventListener("click", function () {
  const taskName = prompt("Enter your task: ");
  if (taskName) {
    const taskObject = {
      name: taskName,
      time: new Date(),
      status: false,
    };
    taskList.push(taskObject);
    updateUI();
  }
});

function updateUI() {
  taskListElement.innerHTML = "";
  let taskUis = "";
  for (let i = 0; i < taskList.length; i++) {
    const task = taskList[i];

    taskUis += `
                <div class="todotask" onclick="onItemClick(${i})">
                <img src="${task.status ? 'images/check.png' : 'images/radio-button.png'}" alt="text" id="image">
                <label id="mylabel" >${task.name}</label>
                <button onclick="onDeleteClick(${i})">delete</button>
                </div>
          `;


  }
  

  taskListElement.innerHTML = taskUis;

}

// function change() {
//   var image = document.getElementById('image');
//   image.src = "images/check.png"
//   }
  
function onItemClick(index){
  taskList[index].status=!taskList[index].status

  updateUI();

}

function onDeleteClick(index){
  const question=confirm("do you want to delete this task?");
  if (question){
    taskList.splice(index,1)
    updateUI()
    alert("hurray task deleted")
  }
  else{
    alert("operation was cancelled")
  }
}

updateUI()