import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import './reducer.css';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [ todos ]);
    
    const handleNewTodo = ( newTodo ) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }

    const handleDelete = ( id ) => {
        const action = {
            type: 'delete',
            payload: id
        }

        dispatch( action );
    }

    const handleToggleTask = ( id ) => {
        const action = {
            type: 'toggle-task',
            payload: id
        }

        dispatch( action );
    }

    return (
        <div>
            <h1>TodoApp ( { todos.length } ) </h1>
            <hr/>

            <div className="mb-4">
                <TodoAdd handleNewTodo={ handleNewTodo } />
            </div>

            <hr/>

            <div>
                <TodoList 
                    todos={ todos } 
                    handleToggleTask={ handleToggleTask } 
                    handleDelete={ handleDelete } 
                />
            </div>
        </div>
    )
}
