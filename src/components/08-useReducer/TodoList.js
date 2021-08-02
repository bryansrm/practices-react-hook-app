import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ( { todos, handleToggleTask, handleDelete } ) => {
    return (
        <ul className="list-group list-group-flush">
            {
                todos.map( (todo, idx) => ( 
                    <TodoListItem
                        key={ todo.id }
                        todo={ todo } 
                        idx={ idx } 
                        handleToggleTask={ handleToggleTask } 
                        handleDelete={ handleDelete } 
                    /> 
                ))
            }
        </ul>
    )
}
