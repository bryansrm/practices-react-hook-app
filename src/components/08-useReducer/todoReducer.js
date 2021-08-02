
export const todoReducer = ( state = [], action ) => {

    switch ( action.type ) {
        case 'add':
            return [ ...state, action.payload ];

        // case 'complete':
        //     let task = state.find( todo => todo.id === action.payload );
        //     task.done = false;

        //     return [ ...state, task ];
    
        default:
            return state;
    }

}