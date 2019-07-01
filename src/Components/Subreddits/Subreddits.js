import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
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
                const redditImage = 'https://cdns.iconmonstr.com/wp-content/assets/preview/2016/240/iconmonstr-reddit-4.png';
                this.setState({ subImage: redditImage})
            }
          
                

           
        })
    }
   
    
    render() {
             
        return (
         
            
        <Grid.Column onClick={this.props.clicked}width={2}>
            <Image
                label={{ as: 'a', color: 'blue', content: `${this.props.sub}`, ribbon: true }}
                src={this.state.subImage}

            />
        </Grid.Column>
                
        );
    }
}


export default Subreddits;