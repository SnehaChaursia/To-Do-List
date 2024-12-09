let btn=document.getElementById("addbtn");
let inputt=document.getElementById("input");
const tasklist=document.getElementById("taskList")
btn.addEventListener('click',()=>{
 alert("Add Task")
})


function addTask() {
  const input=inputt.value.trim();
  const li=document.createElement("Li");
  li.innerHTML=`<label><input type ="checkbox"><span>${input}</span></input></label>
  <span <button class="delbtn">❌ ></button></span>
  <span class="editbtn">🖋️</span>`
  tasklist.appendChild(li);
  inputBox.value = "";
}

delbtn.addEventListener("click", function () {
  if (confirm("Are you sure you want to delete this task?")) {
    li.remove();
    // updateCounters();
  }
});

// btn.addEventListener("click", () => {
//   const taskValue = input.value.trim(); 



//   if (taskValue !== "") {
//     const listItem = document.createElement("li");

//     const checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     checkbox.style.marginRight = "10px";

   
//     const taskText = document.createElement("span");
//     taskText.textContent = taskValue;


//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "X";
//     deleteBtn.className = "delete-btn";

//     listItem.appendChild(checkbox);
//     listItem.appendChild(taskText);
//     listItem.appendChild(deleteBtn);

    
//     tasklist.appendChild(listItem);

//     taskInput.value = "";

    
//     checkbox.addEventListener("change", () => {
//       if (checkbox.checked) {
//         taskText.classList.add("completed");
//       } else {
//         taskText.classList.remove("completed");
//       }
//     });

    
//     deleteBtn.addEventListener("click", () => {
//       tasklist.removeChild(listItem);
//     });
//   } else {
//     alert("Please enter a task.");
//   }
// });
