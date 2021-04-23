import React from 'react'
import { Todo } from 'todos/index'
import { useDispatch } from 'react-redux'
const Todos = ({todos, delTodo, delTodos, toggleTodo }) => {
    const dispatch = useDispatch()
    const onClick = () => {
        
        dispatch(delTodos(0))
    }    
    return (<>
    <h3>할일 목록 </h3>
    <button style={{width:200, backgroundColor:'red'}} onClick={ onClick }>전체삭제</button>
    <div>
        {todos.map(todo => (<Todo key={todo.id} todo={todo} delTodo={delTodo} toggleTodo={toggleTodo}/>))}
    </div>
    </>)
}
export default Todos