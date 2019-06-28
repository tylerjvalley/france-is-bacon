import * as actionTypes from '../Actions/types';


const initialState = {
    //all searched subreddits will be displayed below the search
    searched: '',
    subreddits: [],
}

const reducer = (state = initialState, action) => {
    if (action.type) {
        switch (action.type) {
            case actionTypes.SEARCH_SUBREDDIT:
                return {
                    ...state,
                    searched: action.val
                }
            
            case actionTypes.SUBMIT_SUBREDDIT: 
                return {
                    ...state,
                    subreddits: state.subreddits.concat(action.val)
                }
                
            default:
                return state;
        }
    }
}


export default reducer