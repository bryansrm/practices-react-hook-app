import React from 'react'
import { useForm } from '../../hooks/useForm';

export const FormWithCustomHook = () => {

    const [formState, handleInputChange] = useForm({
        name: '',
        email: '',
        password:''
    });

    const { name, email, password } = formState;

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
                <br />
                <input 
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="*****"
                    autoComplete="off"
                    value={ password }
                    onChange={ handleInputChange }
                />
            </div>

        </>
    )
}
