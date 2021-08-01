import React, { useCallback, useEffect, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // const increment = () => {
    //     setCounter( counter + 1 );
    // }

    const increment = useCallback( () => {
        setCounter( c => c + 1 )
    }, [setCounter]);

    /* Tb se usa useCallBack, cuando se usa una función como dependencia
    y al renderizar nuevamente el componente se generaun nuevo espacio de memoria para la función
    haciendo que se ejecute el useEffect, con el useCallback NO se ejecutaria */
    useEffect(() => {
        // ???
    }, [increment])

    return (
        <div>
            <h1>CallbackHook!!</h1>
            <hr/>

            <p> { counter } </p>

            <ShowIncrement increment={ increment } />
        </div>

        
    )
}
