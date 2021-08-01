import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);  
    const { author, quote } = !!data && data[0];

    return (
        <div>
            <h1>Breaking Bad</h1>
            <hr />

            {
                loading
                ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                :
                    (
                        <div className="blockquote text-right">
                            <p className="mb-0"> { quote } </p>
                            <footer className="blockquote-footer"> { author } </footer>
                        </div>
                    )
            }

            <button 
                className="btn btn-primary float-right"
                onClick={ () => increment() }
            >
                Load next quote
            </button>

            
        </div>
    )
}
