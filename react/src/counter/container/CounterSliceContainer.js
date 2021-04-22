import React from 'react'
import { CounterSlice } from 'counter/index'
import { useDispatch, useSelector } from 'react-redux'
import {increase, decrease } from 'counter/reducer/counter.slice'
import {Navi} from 'common/index'
const CounterSliceContainer = () => {
    const dispatch = useDispatch()
    const number = useSelector(state => (state.counterSlice.number))
  
    return (<>
    <Navi/>
        <CounterSlice number={number} 
        onIncrease={()=> dispatch(increase(1))}
        onDecrease={()=> dispatch(decrease(1))}/>
    </>)
}

export default CounterSliceContainer
