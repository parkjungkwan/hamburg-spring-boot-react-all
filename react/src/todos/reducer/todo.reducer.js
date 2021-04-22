import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    input: '',
    todos: [
        {id: 1, text: '리액트 학습', done: true},
        {id: 2, text: '리덕스 학습', done: true},
    ]
}
// 기능: changeInput, insert, toggle, remove
const todoReducer = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        changeInput(){(state, {payload: input})=>{
            state.input = input
        }},
        insert(){(state, action)=>{
                const {id, text} = action.payload
                state.todos.push({id, text, done: false});
            }
        },
        toggle(){(state, action)=>{
            const todo = state.todos.find(todo => todo.id === action.payload)
            if(todo){
                todo.done = !todo.done
            }
        }
    },
        remove(){(state, action)=>{
            const {id} = action.payload
            const i = state.todos.findIndex(todo => todo.id === id)
            state.todos.splice(i, 1)
            }
        }
    }
})

const { actions, reducer } = todoReducer
export const {changeInput, insert, toggle, remove} = actions
export default reducer