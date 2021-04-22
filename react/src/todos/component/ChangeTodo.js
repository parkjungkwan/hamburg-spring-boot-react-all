import React from 'react'

const editTask = () => {
    const edit= ()=>{
        console.log("Edit Task...");
  
        var listItem = this.parentNode;
          
        var editInput = listItem.querySelector("input[type=text]");
        var label = listItem.querySelector("label");
          
        var containsClass = listItem.classList.contains("editMode");
          
          
          // if class of the parent is .editMode
          if (containsClass) {
              //Switch from .editMode
              //label text become the input's value
              label.innerText = editInput.value;
          } else {
              //Switch to .editMode
              //input value becomes the labels text
                 editInput.value = label.innerText;
          }
          //Toggle .editMode on the parent 
          listItem.classList.toggle("editMode");
        }
    }
   






const bindTaskEvents = (taskListItem, checkBoxEventHandler) => {
  	console.log("Bind List item events");
  	// select listitems chidlren
  	var checkBox = taskListItem.querySelector('input[type="checkbox"]');
    var editButton = taskListItem.querySelector("button.edit");
    var deleteButton = taskListItem.querySelector("button.delete");
		//bind editTask to edit button
  	editButton.onclick = editTask;
		//bind deleteTask to delete button
 		//deleteButton.onclick = deleteTask;
		//bind checkBoxEventHandler to checkbox
  	checkBox.onchange = checkBoxEventHandler;
  
}

const ChangeTodo = () => {
    return (<>
    
    </>)
}
export default ChangeTodo