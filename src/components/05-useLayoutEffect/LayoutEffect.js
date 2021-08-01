import React, { useLayoutEffect, useRef } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'

export const LayoutEffect = () => {

    const { counter, increment } = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);  
    const {  quote } = !!data && data[0];

    const pRef = useRef();

    useLayoutEffect(() => {
        
        console.log(pRef.current.getBoundingClientRect());

    }, [quote])

    return (
        <div>
            <h1>LayoutEffect!!</h1>
            <hr />

            <div className="text-right d-flex">
                <p 
                    ref={pRef}
                    className="mb-0"
                > 
                    { quote } 
                </p>
            </div>

            <button 
                className="btn btn-primary float-right"
                onClick={ () => increment() }
            >
                Load next quote
            </button>

            
        </div>
    )
}
