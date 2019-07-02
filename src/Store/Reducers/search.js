import * as actions from '../Actions/types';

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
                const foundExistingSubreddit = state.subreddits.some(
                    subreddit => subreddit.toUpperCase() === action.val.toUpperCase()
                )

                if (!foundExistingSubreddit) {
                    return {
                        ...state,
                        subreddits: [...state.subreddits, action.val]
                    }
                } else {
                    alert('Subreddit already chosen')
                    return state
                }
                
                
                
                
              
                    
                
            default:
                return state;
        }
    }
}


