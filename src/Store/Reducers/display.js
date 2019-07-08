import * as actionTypes from '../Actions/types';


const initialState = {
    comments: [],
    theme: 'default'
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

                case actionTypes.DISPLAY_THEME:
                
                return {
                    ...state,
                    theme: action.theme
                }
            
            default: 
                return state;
        }
    }
}


export default reducer;

