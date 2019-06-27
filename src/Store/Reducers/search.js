import * as actionTypes from '../Actions/types';


const initialState = {
    search: '',
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