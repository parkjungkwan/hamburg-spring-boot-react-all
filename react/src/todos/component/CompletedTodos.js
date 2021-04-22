import React from 'react'

const CompletedTodos = () => {
    const taskCompleted = () => {
        console.log("Task Complete...");
        //When the Checkbox is checked 
        //Append the task list item to the #completed-tasks ul
            //var listItem = this.parentNode;
            //completedTasksHolder.appendChild(listItem);
            //bindTaskEvents(listItem, taskIncomplete);
        }
        const taskIncomplete = () => {
            console.log("Task Incomplete...");
                //When the checkbox is unchecked appendTo #incomplete-tasks
           // var listItem = this.parentNode;
           // incompleteTasksHolder.appendChild(listItem);
           // bindTaskEvents(listItem, taskCompleted);
            }
    
    
    //Delete an existing task
    const deleteTask = () => {
        console.log("Delete Task...");
            //Remove the parent list item from the ul
        //var listItem = this.parentNode;
        //var ul = listItem.parentNode;
    
       // ul.removeChild(listItem);
    }
    const incompleteTasksHolderLoop = () => {
        //cycle over incompleteTaskHolder ul list items
        //let i = 0
        /*for (; i < incompleteTasksHolder.children.length; i ++) {
            //bind events to list item's children (taskCompleted)	
            bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
          }*/
    }
    
    
    const completeTasksHolderLoop = () => {
        //cycle over completedTaskHolder ul list items
        let i = 0
      /*  for (; i < completedTasksHolder.children.length; i ++) {
        //bind events to list item's children (taskCompleted)	
        bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
        } */
    }
    return (<><h3>Completed</h3>
    <ul id="completed-tasks">
        <li>
            <input type="checkbox" checked="" />
            <label>See the Doctor</label>
            <input type="text" />
            <button className="edit" onClick={taskCompleted}>Edit</button>
            <button className="delete" onClick={deleteTask}>Delete</button>
        </li>
    </ul></>)
}
export default CompletedTodos