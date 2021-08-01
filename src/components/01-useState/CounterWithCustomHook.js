import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CounterWithCustomHook = () => {
    
    const { state, reset, increment, decrement } = useCounter( 100 );

    return (
        <>
          <h1>Counter with hook: { state }</h1>
          <hr />

          <button className="btn btn-primary" onClick={ () => increment( 2 ) }> +1 </button>
          <button className="btn btn-primary ml-4" onClick={ () => reset() }> reset </button>
          <button className="btn btn-danger ml-4" onClick={ () => decrement( 2 ) }> -1 </button>
        </>
    )
}
