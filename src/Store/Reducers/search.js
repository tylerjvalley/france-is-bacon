import * as actionTypes from '../Actions/types';


const initialState = {
    //all searched subreddits will be displayed below the search form.
    searched: [],
}

const reducer = (state = initialState, action) => {
    if (action.type) {
        switch (action.type) {
            case actionTypes.SEARCH_SUBREDDIT:
                return state

            default:
                return state;
        }
    }
}


export default reducer