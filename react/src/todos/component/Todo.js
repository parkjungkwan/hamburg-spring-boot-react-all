import React from 'react'
import { useDispatch } from 'react-redux'
const Todo = ({todo, delTodo, toggleTodo}) => {
    const dispatch = useDispatch()
    const deleteClick = () => {
        dispatch(delTodo(todo.id))
    }
    const toggleClick = () => {
        alert('>> '+todo.id)
        dispatch(toggleTodo(todo.id))
    }

    return (<div style={{width:600}}>
        <input type="checkbox" style={{width:100}} onClick={toggleClick} />
        {(todo.done) ? 
        <del><span style={{width:400}}> {todo.text} </span></del>
        :<span style={{width:400}}> {todo.text} </span>}
        <button onClick={ deleteClick } style={{width:100, backgroundColor:'red'}}>삭제</button>
    </div>)
}
export default Todo