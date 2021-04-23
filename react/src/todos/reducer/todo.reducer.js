import { Satellite } from '@material-ui/icons'
import { createSlice } from '@reduxjs/toolkit'
import uuid from 'uuid/v4'
const initialState =[
        {id: 1, text: '리액트 학습', done: true},
        {id: 2, text: '리덕스 학습', done: true},
        {id: 3, text: '썽크 학습', done: false},
    ]

// 기능: addTodo, todos, findTodo, editTodo, delTodo
const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, {payload}){ state.push({id: uuid(), text: payload, done: false}) },
        delTodo(state, {payload}){ 
            state.splice(state.findIndex(j => j.id === payload), 1)
            // return state.filter((todo) => todo.id !== payload) 이 방식도 유효함
            // return state.filter((el) => el.id !== payload) 이 방식도 유효함
        },
        delTodos(state, {payload}){
            state.splice(payload)
        },
        toggleTodo(state, {payload}){
            const toggle = state.find((todo) => todo.id === payload);
            toggle.done = !toggle.done;
        }
     }})

/**
액션
{type}
플럭스 액션
{payload}
슬라이스
{"name":"todos",
"actions":{},
"caseReducers":{}}

 */
const { actions, reducer } = todoSlice
export const { addTodo, delTodo, delTodos, toggleTodo } = actions
export default reducer


