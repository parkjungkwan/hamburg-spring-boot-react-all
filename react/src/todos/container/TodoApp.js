import 'todos/style/TodoStyle.css'
import { Navi } from 'common/index'
import { useDispatch, useSelector } from 'react-redux'
import { Todos, CompletedTodos } from 'todos/index'
import React, { useCallback } from 'react'
import { addTodo } from 'todos/reducer/todo.reducer'
import { AddTodo } from 'todos/index'

const TodoApp = () => {
    
    const todos = useSelector(state => (state.todoReducer))
  

    return (<div >
        <Navi/>
        <div style={{marginTop:100}}>
   <AddTodo addTodo={addTodo} />
    <Todos todos={todos}/>
    </div>
</div>)
}
export default TodoApp