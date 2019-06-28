import * as types from './types';


export const fetchSubsBegin = () => {
    return {
        type: types.FETCH_SUBS_BEGIN
    }
}

export const fetchSubsSuccess = (subs) => {
    return {
        type: types.FETCH_SUBS_SUCCESS,
        payload: { subs }
    }
}

export const fetchSubsFailure = (error) => {
    return {
        type: types.FETCH_SUBS_FAILURE,
        payload: { error }
    }
}