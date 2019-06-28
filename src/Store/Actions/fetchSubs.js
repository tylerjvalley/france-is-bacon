import { fetchSubsBegin, fetchSubsSuccess, fetchSubsFailure } from './actions';


//fetch subreddit icon images
export const fetchSubImages = (sub) => {
    return dispatch => {
        dispatch(fetchSubsBegin());
        fetch('https://www.reddit.com/' + sub + '/about.json')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchSubsSuccess(res.data.data.icon_img)) //check api
            return res.data.data.icon_img
        })
        .catch(error => {
            dispatch(fetchSubsFailure(error));
        })
    }
}

//fetch posts...





//maybe more stuff later

