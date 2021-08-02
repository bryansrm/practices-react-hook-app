import React from 'react'

export const TodoListItem = ({ todo, idx, handleToggleTask, handleDelete }) => {
    return (
        <li
            key={ todo.id }
            className="list-group-item"
        >
            <div className="d-flex justify-content-between align-items-center">
                <p 
                    className={ `mb-0 font-weight-bold ${ todo.done && 'task-complete'}` }
                    onClick={ () => handleToggleTask( todo.id ) }
                >{ idx + 1 }. { todo.desc } </p>
                <button 
                    className="btn btn-danger"
                    onClick={ () => handleDelete( todo.id ) }
                >
                    Borrar
                </button>
            </div>
            
        </li>
    )
}
