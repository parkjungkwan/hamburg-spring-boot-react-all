import React, { useEffect } from 'react'  
import reducer from 'counter/reducer/counter.slice'
import { configureStore } from '@reduxjs/toolkit'
import { increase, decrease } from 'counter/reducer/counter.slice'


const CounterSlice = React.memo(({ number, onIncrease, onDecrease}) =>{
    
    return (<>
    <h2 style={{ color : 'black'}}>슬라이스 카운터</h2>
    <div>
        <div>
            <button aria-label="+" onClick={onIncrease}>
                +
            </button>
            <span  style={{ color : 'black', width: 100}}>{number}</span>
            <button aria-label="-" onClick={onDecrease}>
                -
            </button>
        </div>
    </div>
    </>)
    
})

export default CounterSlice