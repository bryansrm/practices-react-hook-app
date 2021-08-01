import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { SmallCounter } from './SmallCounter';

export const Memorize = () => {

    const { counter, increment } = useCounter(10);
    const [show, setShow] = useState(true);

    return (
        <div>
            <h1>Memorize!!</h1>
            <hr/>
            <h2> Counter: <SmallCounter counter={ counter } /></h2>
            <br/>

            <button
                className="btn btn-primary"
                onClick={ () => increment() }
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary ml-3"
                onClick={ () => setShow(!show) }
            >
                Show / Hide
            </button>
        </div>
    )
}
