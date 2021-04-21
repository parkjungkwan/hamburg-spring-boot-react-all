import React from 'react'
import 'todos/style/TodoStyle.css'
const TodoApp = () => {
    return (<div className="container todo">
    <p>
        <label htmlFor="new-task">Add Item</label>
        <input id="new-task" type="text" />
        <button>Add</button>
    </p>
    <h3>Todo</h3>
    <ul id="incomplete-tasks">
        <li>
            <input type="checkbox" />
            <label>Pay Bills</label>
            <input type="text" />
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </li>
        <li class="editMode">
            <input type="checkbox" />
            <label>Go Shopping</label>
            <input type="text" value="Go Shopping" />
            <button className="edit">Edit</button>
            <button className="delete">Delete</button>
        </li>
    </ul>
    <h3>Completed</h3>
    <ul id="completed-tasks">
        <li>
            <input type="checkbox" checked="" />
            <label>See the Doctor</label>
            <input type="text" />
            <button className="edit">Edit</button>
            <button className="delete">Delete</button>
        </li>
    </ul>
</div>)
}
export default TodoApp