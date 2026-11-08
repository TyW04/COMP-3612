document.addEventListener('DOMContentLoaded', () => {
   
   /* add code here */
   function taskObject(details, date) {
      this.details = details;
      this.date = date;
   }

   const addTaskBtn = document.querySelector("#addTask");
   addTaskBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const todo = document.querySelector(".todo.hidden");
      // unhide the todo list
      todo.classList = "todo";
      // get the task
      const taskDetails = document.querySelector("")
      
   });

});