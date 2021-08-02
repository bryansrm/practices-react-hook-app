import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';

import './reducer.css';

const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
}];

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, initialState);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            desc: 'Aprender Ingles',
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch( action );

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
                        name="descripction"
                        className="form-control"
                        placeholder="Aprender..."
                        autoComplete="off"
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
                                    <p className="mb-0 font-weight-bold">{ idx + 1 }. { todo.desc } </p>
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
