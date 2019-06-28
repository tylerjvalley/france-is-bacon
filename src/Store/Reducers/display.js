import * as actionTypes from '../Actions/types';


const initialState = {
    pending: false,
    subs: [],
    error: null
}

const reducer = ( state = initialState, action ) => {
    if ( action.type ) {
        switch( action.type ) {
            case actionTypes.FETCH_SUBS_BEGIN:
                return {
                    ...state,
                    pending: true
                }

            case actionTypes.FETCH_SUBS_SUCCESS:
                return {
                    ...state,
                    pending: false,
                    subs: action.payload
                }
            
            case actionTypes.FETCH_SUBS_FAILURE: 
                return {
                    ...state,
                    pending: false,
                    error: action.error
                }
                
            
            default: 
                return state;
        }
    }
}


export default reducer;