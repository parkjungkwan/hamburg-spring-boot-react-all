import { createSlice } from '@reduxjs/toolkit'
import uuid from 'uuid/v4'
const initialState = [
        {id: 1, text: '리액트 학습', done: true},
        {id: 2, text: '리덕스 학습', done: true},
    ]

// 기능: addTodo, todos, findTodo, editTodo, delTodo
const todoReducer = createSlice({
    name: 'todoReducer',
    initialState,
    reducers: {
        addTodo(state, {payload}){ state.push({id: uuid(), text: payload, done: false}) },
        delTodo(state, {payload}){ state.filter((todo) => todo.id !== payload.id )}
     }})

const { actions, reducer } = todoReducer
export const {addTodo, delTodo} = actions
export default reducer