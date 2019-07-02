import axios from 'axios';

const apiUrl = 'https://www.reddit.com/';



//check if subreddit exists 

export const checkSubreddit = (sub) => {

    return axios.get(apiUrl + 'r/' + sub + '/about.json')
        .then(res => {
            return true
        })
        .catch(error => {
            console.log('Invalid Subreddit')
            return false
            
        })
}
//fetch subreddit icon images
export const fetchSubImages = (sub) => {
    
     return axios.get(apiUrl + 'r/' + sub + '/about.json')
        .then(res => {
            return res.data.data.icon_img
        })
        .catch(error => {
            console.log(error);
        })
        

}

//fetch posts...

export const fetchSubPosts = (sub) => {
    return axios.get(apiUrl + 'r/' + sub + '/top.json')
        .then(res => {
             return res.data.data.children //top 25 posts
        })
        .catch(error => {
            console.log(error)
        })
}


//maybe more stuff later

