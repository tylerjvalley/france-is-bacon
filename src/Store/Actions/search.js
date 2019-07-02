import * as types from './types';



export const search = (val) => {
    return {
        type: types.SEARCH_SUBREDDIT,
        val: val
    }
}

export const submit = (val) => {
   
    return {
        type: types.SUBMIT_SUBREDDIT,
        val: val
    }
   
    
}

