import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';

import './reducer.css';

// const initialState = [{
//     id: new Date().getTime(),
//     desc: 'Aprender React',
//     done: false
// }];

const init = () => {
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }];
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);
    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [ todos ]);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if( description.trim().length < 1 ) return;

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch( action );

        reset();

    }

    const handleCompleteTask = ( id ) => {
        // const action = {
        //     type: 'complete',
        //     payload: id
        // }

        // dispatch( action );
    }

    return (
        <div>
            <h1>TodoApp ( { todos.length } )</h1>
            <hr/>

            <div className="mb-4">
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
            </div>

            <hr/>

            <div>
                <ul className="list-group list-group-flush">
                    {
                        todos.map( (todo, idx) => (
                            <li
                                key={ todo.id }
                                className="list-group-item"
                            >
                                <div className="d-flex justify-content-between align-items-center">
                                    <p 
                                        className={ todo.done ? "mb-0 font-weight-bold task-complete" : "mb-0 font-weight-bold"}
                                        onClick={ handleCompleteTask( todo.id ) }
                                    >{ idx + 1 }. { todo.desc } </p>
                                    <button 
                                        className="btn btn-danger"
                                    >
                                        Borrar
                                    </button>
                                </div>
                                
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
