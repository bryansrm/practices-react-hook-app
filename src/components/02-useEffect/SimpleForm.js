import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect( () => {
        console.log('hi');
    }, []);

    // Se desestructura el valor del event con { target }
    const handleInputChange = ({ target }) => {
        setformState({
            ...formState,
            [ target.name ]: target.value
        });
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className="form-group">
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
                <br />
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Tu correo"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>

            { name === '123' && <Message /> }

        </>
    )
}
