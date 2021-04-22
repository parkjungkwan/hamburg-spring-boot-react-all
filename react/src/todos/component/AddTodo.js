import React from 'react'

const AddTodo = () => {
    const addTask = () => {
        alert(`addTask clicked`)
        
      //  const listItem = createNewTaskElement(taskInput.value);
      //  incompleteTasksHolder.appendChild(listItem);
      //  bindTaskEvents(listItem, taskCompleted);
      const taskInput = document.getElementById("new-task")
        taskInput.value = "";
      }
      

    return (<>
     <p>
        <label htmlFor="new-task">할일 추가</label>
        <input id="new-task" type="text" style={{width:500}}/>
        <button style={{width:100, backgroundColor:'green'}} onClick={addTask} >Add</button>
    </p>
    </>)
}

export default AddTodo