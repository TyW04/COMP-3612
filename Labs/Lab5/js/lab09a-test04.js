document.addEventListener('DOMContentLoaded', () => {
   
   /* add code here */
   function taskObject(details, date) {
      this.id = Date.now();
      this.details = details;
      this.date = date;
   }

   const tasks = [];
   const table = document.querySelector("#taskTable");

   function deleteTask(e) {
      e.preventDefault();

      const taskToDelete = Number(e.target.dataset.id);
      for (let task of tasks) {
         if (task.id === taskToDelete) {
            const idx = tasks.indexOf(task);
            tasks.splice(idx, 1);
            break;
         }
      }

      drawTable();

   }
   function drawTable() {
      // Only doing this because it's a really fast way to clear things out
      table.innerHTML = "";

      for (let task of tasks) {
         // set up table - found all this after looking up how to insert rows and cells in js
         // https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement/insertCell
         const row = table.insertRow();
         const deleteCell = row.insertCell();
         const dateCell = row.insertCell();
         const detailsCell = row.insertCell();

         // create delete button
         const deleteBtn = document.createElement("button");
         deleteBtn.textContent = "Del";
         deleteBtn.dataset.id = task.id;
         deleteBtn.addEventListener('click', deleteTask);
         deleteCell.appendChild(deleteBtn);

         dateCell.textContent = task.date;
         detailsCell.textContent = task.details;
      }
   }

   const addTaskBtn = document.querySelector("#addTask");

   addTaskBtn.addEventListener('click', (e) => {
      e.preventDefault();
   
      // unhide the todo section
      const todo = document.querySelector(".todo");
      todo.classList.remove("hidden");

      // unhide the remove button
      const aside = document.querySelector("aside");
      aside.classList.remove("hidden");

      // get the task
      const taskDetails = document.querySelector("#tdetails");
      const taskDate = document.querySelector("#tdate");
      const detailsText = taskDetails.value;
      const dateValue = taskDate.value;

      // create the task
      const newTask = new taskObject(detailsText, dateValue);
      tasks.push(newTask);

      drawTable();
      
      // reset inputs so a new task can be inserted
      taskDetails.value = "";
      taskDate.value = "";
   });

   const removeAllBtn = document.querySelector("#clearTable");
   removeAllBtn.addEventListener('click', (e) => {
      e.preventDefault();

      // Solution found on: https://stackoverflow.com/questions/1232040/how-do-i-empty-an-array-in-javascript
      tasks.length = 0;

      drawTable();
   });
});