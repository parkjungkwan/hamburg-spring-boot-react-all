import {
    combineReducers,
    configureStore,
    getDefaultMiddleware,
  } from "@reduxjs/toolkit";
import logger from "redux-logger";
import counterSlice from 'counter/reducer/counter.slice'
import todos from 'todos/reducer/todo.reducer'

  const rootReducer = combineReducers({counterSlice, todos})
  export default configureStore({
    rootReducer,
    middleware: [...getDefaultMiddleware(), logger],
  });