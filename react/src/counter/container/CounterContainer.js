import { ReduxCounter } from 'counter'
import React, { useCallback } from 'react'
import { Counter } from 'counter/index'
import { useSelector , useDispatch } from 'react-redux'
import { increase, decrease } from 'counter/reducer/Counter.reducer'

const CounterContainer = () => {
    const number = useSelector(state => (state.counterReducer.number))
    //const number = 100
    const dispatch = useDispatch()
    const onIncrease = useCallback(()=> dispatch(increase()),[dispatch])
    const onDecrease = useCallback(()=> dispatch(decrease()),[dispatch])
    return (<>
        <ReduxCounter number={number} onIncrease={onIncrease} onDecrease={onDecrease}/>
    </>)
}

export default CounterContainer
