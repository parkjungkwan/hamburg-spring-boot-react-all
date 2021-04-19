import { createSlice } from '@reduxjs/toolkit'

const CounterService = createSlice({
    name: 'counter',
    initialState: {value: 0},
    reducers: {
        add : i => i.value += 1,
        sub : i => i.value -= 1,
        test: (i, j) => i.value += j.payload 
    }
})
export const {add, sub, test} = CounterService.actions
export default CounterService.reducer