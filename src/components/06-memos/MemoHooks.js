import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';

export const MemoHook = () => {

    const { counter, increment } = useCounter(1000);
    const [show, setShow] = useState(true);

    const procesoPesado = ( value ) => {
        for(let i = 0; i < value; i ++ ){
            console.log('Ejecutando...');
        }

        return `${ value } iteraciones realizadas`;
    }

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [ counter ]);

    return (
        <div>
            <h1>Memo Hook!!</h1>
            <hr/>
            <h2> Counter: <small> { counter } </small></h2>
            <br/>

            <p> { memoProcesoPesado } </p>

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
