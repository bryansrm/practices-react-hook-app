import React, { useState } from 'react'

export const useCounter = ( initialState = 10 ) => {
    
    const [state, setstate] = useState(initialState);
    
    const reset = () => setstate( initialState );

    const increment = ( value = 1 ) => setstate( state + value );
    
    const decrement = ( value = 1 ) => setstate( state - value );

    return {
        state,
        reset,
        increment,
        decrement
    }

}
