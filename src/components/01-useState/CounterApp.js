import React, { useState } from 'react'

export const CounterApp = () => {

    // const [counter, setCounter] = useState(10);
    const [counterState, setCounterState] = useState({
        counter1: 10,
        counter2: 20,
    });

    const { counter1, counter2 } = counterState;

    return (
        <>
            <h1>Counter 1: { counter1 }</h1>
            <h1>Counter 2: { counter2 }</h1>
            <hr />

            <button 
                className="btn btn-primary"
                onClick={ () => setCounterState({
                    ...counterState, 
                    counter1: counter1 + 1
                })}
            >
                +1
            </button>
        </>
    )
}
