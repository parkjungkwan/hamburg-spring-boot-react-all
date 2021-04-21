import { RtkCounter } from 'counter/index'
import { CounterSlice } from 'counter/index'
import { useDispatch } from 'react-redux'
import {increase, decrease } from 'counter/reducer/counter.slice'
const CounterSliceContainer = () => {
    const dispatch = useDispatch()
    return (<>
        <CounterSlice number={0} onIncrease={()=> dispatch(increase())} onDecrease={dispatch(decrease())}/>
    </>)
}

export default CounterSliceContainer
