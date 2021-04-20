import { Button } from 'bootstrap'
import React, {useEffect, useState} from 'react' 
import { useSelector } from 'react-redux'

const Counter = () => {
    const [count, setCount] = useState(0)
    useEffect(()=>{setCount(0)},[])
    return (<>
    <h2 style={{ color : 'black'}}>카운터</h2>
    <div>
        <div>
            <button aria-label="+" onClick={()=>{setCount(count + 1)}}>
                +
            </button>
            <span  style={{ color : 'black'}}>{count}</span>
            <button aria-label="-" onClick={()=>{setCount(count - 1)}}>
                -
            </button>
        </div>
    </div>
    </>)
}

export default Counter