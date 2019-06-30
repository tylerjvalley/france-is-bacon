import * as actions from '../Actions/types';
//import { fetchSubImages } from '../Actions/fetchSubs';


const initialState = {
    //all searched subreddits will be displayed below the search
    searched: '',
    subreddits: [],
}

export const reducer = (state = initialState, action) => {
    if (action.type) {
        switch (action.type) {
            case actions.SEARCH_SUBREDDIT:
                return {
                    ...state,
                    searched: action.val
                }
            
            case actions.SUBMIT_SUBREDDIT: 
        
                return {
                    ...state,
                    subreddits: state.subreddits.concat(action.val),
                }
                
            default:
                return state;
        }
    }
}


