import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleNewTodo }) => {

    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if( description.trim().length < 1 ) return;

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        handleNewTodo( newTodo );

        reset();

    }

    return (
        <>
            <p className="font-weight-bold">Agregar Tarea</p>
            <form 
                onSubmit={ handleSubmit }
                className="d-flex justify-content-between align-items-center">
                <input 
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Aprender..."
                    autoComplete="off"
                    value={ description }
                    onChange={ handleInputChange }
                />
                <button
                    type="submit"
                    className="btn btn-outline-primary ml-5"
                >
                    Agregar
                </button>
            </form>  
        </>
    )
}
