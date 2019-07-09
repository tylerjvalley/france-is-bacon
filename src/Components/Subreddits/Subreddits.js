import React, { Component } from 'react';
import { fetchSubImages } from '../../Store/Actions/fetchSubs';






class Subreddits extends Component {

    state = {
        subImage: '',
    }

    componentDidMount() {
        fetchSubImages(this.props.sub).then(image => {

            if (image) {
                this.setState({ subImage: image })
            } else {
                const redditImage = 'https://www.freeiconspng.com/uploads/reddit-logo-social-icon-33.png';
                this.setState({ subImage: redditImage})
            }
          
                

           
        })
    }

   
    
    render() {
             
        return (
         
            
        <div onClick={this.props.clicked} className="sub-column">    
            <div className="subreddit-icon">
                <button className="ribbon">{this.props.sub}</button>
                <img src={this.state.subImage} alt={this.props.sub}/>
            </div>
        </div>
                
        );
    }
}


export default Subreddits;