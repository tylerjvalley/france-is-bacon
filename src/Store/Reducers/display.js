import * as actionTypes from '../Actions/types';


const initialState = {
    results: [],
}

const reducer = ( state = initialState, action ) => {
    if ( action.type ) {
        switch( action.type ) {
            case actionTypes.DISPLAY_POSTS:
                return state
            
            default: 
                return state;
        }
    }
}


export default reducer;