import React from 'react'
import { Todo } from 'todos/index'
const Todos = () => {
    const todos = [{id: 1, text: '리액트 학습', done: true},
    {id: 2, text: '리덕스 학습', done: true},]
    return (<>
    <h3>할일 목록</h3>
    <div>
        {todos.map(todo => (<Todo key={todo.id} todo={todo}/>))}
    </div>
    </>)
}
export default Todos