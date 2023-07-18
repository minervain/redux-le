import React from 'react'
import { increase,decrease, increaseByAmount } from '../stores/counter'
import {  useDispatch } from 'react-redux'



const CounterAction = () => {
    const dispatch = useDispatch()
    return (
    <div>
  <button
          aria-label="Increment value"
          onClick={() => dispatch(increase())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrease())}
        >
          Decrement
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(increaseByAmount(4))}
        >
          4 arttır
        </button>
    </div>
  )
}

export default CounterAction