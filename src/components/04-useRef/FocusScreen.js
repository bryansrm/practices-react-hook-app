import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
    };

    return (
        <div>
            <h1> FocusScreen!! </h1>
            <hr />

            <input 
                ref={inputRef}
                className="form-control"
                placeholder="Nombre completo"
            />

            <button
                className="btn btn-primary mt-4"
                onClick={ handleClick }
            >
                Submit
            </button>
        </div>
    )
}
