
export const todoReducer = ( state = [], action ) => {

    switch ( action.type ) {
        case 'add':
            return [ ...state, action.payload ];

        case 'toggle-task':
            return state.map( todo => ( todo.id === action.payload ) ? { ...todo, done: !todo.done } : todo );

            // return state.map( todo => 
            //     (todo.id === action.payload) 
            //         ? { ...todo, donde: !todo.done }
            //         : todo
            // );

            // return state.map( todo => {
            //     if( todo.id === action.payload ){
            //         return { 
            //             ...todo, 
            //             done: !todo.donde 
            //         }
            //     }else{
            //         return todo;
            //     }
            // });

        case 'delete':
            return state.filter( todo => todo.id !== action.payload );
    
        default:
            return state;
    }

}