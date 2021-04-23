import 'todos/style/TodoStyle.css'
import { Navi } from 'common/index'
import { useDispatch, useSelector } from 'react-redux'
import { Todos, CompletedTodos } from 'todos/index'
import React, { useCallback } from 'react'
import { addTodo, delTodo, delTodos , toggleTodo} from 'todos/reducer/todo.reducer'
import { AddTodo } from 'todos/index'

const TodoApp = () => {
    
    const todos = useSelector(state => (state.todos))
  

    return (<div >
        <Navi/>
        <div style={{marginTop:100}}>
   <AddTodo addTodo={addTodo} />
    <Todos todos={todos} delTodo={delTodo} 
    delTodos={delTodos}
    toggleTodo={toggleTodo}/>
    </div>
</div>)
}
export default TodoApp