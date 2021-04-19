import { configureStore } from '@reduxjs/toolkit'
import counterReducer from 'board/service/Counter.service'
export default configureStore({
    reducer: {
        counter : counterReducer
    },
})