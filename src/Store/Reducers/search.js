import * as actions from '../Actions/types';

const initialState = {
    //all searched subreddits will be displayed below the search
    searched: '',
    subreddits: [],
}

 const reducer = (state = initialState, action) => {
    if (action.type) {
        switch (action.type) {
            case actions.SEARCH_SUBREDDIT:

                let editedSearch
                if (action.val.includes('r/')) {
                    editedSearch = action.val.replace('r/', '')
                } else {
                    editedSearch = action.val;
                }
                
                return {
                    ...state,
                    searched: editedSearch
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

export default reducer


