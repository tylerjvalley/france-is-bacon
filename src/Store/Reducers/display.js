import * as actionTypes from '../Actions/types';


const initialState = {
    comments: []
}

const reducer = ( state = initialState, action ) => {
    if ( action.type ) {
        switch( action.type ) {

            case actionTypes.DISPLAY_POST_COMMENTS:
               
                const newArray = action.comments.map(comment => {
                    return comment
                })
                

                return {
                    ...state,
                    comments: newArray
                }
            
            default: 
                return state;
        }
    }
}


export default reducer;

