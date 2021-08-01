import { useState } from 'react'

export const useCounter = ( initialState = 10 ) => {
    
    const [counter, setCounter] = useState(initialState);
    
    const reset = () => setCounter( initialState );

    const increment = ( value = 1 ) => setCounter( counter + value );
    
    const decrement = ( value = 1 ) => setCounter( counter - value );

    return {
        counter,
        reset,
        increment,
        decrement
    }

}
