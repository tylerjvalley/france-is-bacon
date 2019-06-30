import axios from 'axios';


//fetch subreddit icon images
export const fetchSubImages = (sub) => {
  
    const apiUrl = 'https://www.reddit.com/';
    

    
     return axios.get(apiUrl + 'r/' + sub + '/about.json')
        .then(res => {
            return res.data.data.icon_img
        })
        .catch(error => {
            console.log(error);
        })
        

}

/*
    if (sub.length > 0) {
       image =  axios.get(apiUrl + 'r/' + sub + '/about.json')
            .then(res => console.log(res.data.data.icon_img))
            .catch(error => console.log(error)
        
    }
    
    return image;*/






//fetch posts...





//maybe more stuff later

