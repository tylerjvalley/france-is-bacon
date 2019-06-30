import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { fetchSubImages } from '../../Store/Actions/fetchSubs';




class Subreddits extends Component {

    state = {
        subImage: '',
    }

    componentDidMount() {
        fetchSubImages(this.props.sub).then(image => {
            this.setState({subImage: image})
           
        })
    }
   
    
    render() {
             
        return (
         
            
        <Grid.Column width={2}>
            <Image
                label={{ as: 'a', color: 'blue', content: `${this.props.sub}`, ribbon: true }}
                src={this.state.subImage}

            />
        </Grid.Column>
                
        );
    }
}


export default Subreddits;