import React from 'react'

export const ShowIncrement = React.memo(({ increment }) => {
    console.log('hola');
    return (
        <button
            className="btn btn-primary mt-4"
            onClick={ increment }
        >
            Incrementar
        </button>
    )
})
