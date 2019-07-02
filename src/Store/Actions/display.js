import * as types from './types';


export const displayPostComments = comments => {
    return {
        type: types.DISPLAY_POST_COMMENTS,
        comments: comments
    }
}