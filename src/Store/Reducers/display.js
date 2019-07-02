import * as actionTypes from '../Actions/types';


const initialState = {
    comments: []
}

const reducer = ( state = initialState, action ) => {
    if ( action.type ) {
        switch( action.type ) {

            case actionTypes.DISPLAY_POST_COMMENTS:
                return state
                
            
            default: 
                return state;
        }
    }
}


export default reducer;

