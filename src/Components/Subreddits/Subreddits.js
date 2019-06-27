import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
//const axios = require('axios');
import askRedditPic from '../../images/askreddit.png';


class Subreddits extends Component {

    render() {
        /*
        
        axios.get('https://www.reddit.com/r/AskReddit/about.json')
            .then(res => {
                console.log(res.data.data.icon_img)
                this.setState({ askImage: res.data.data.icon_img });
            })
            .catch(error => {
                console.log(error);
            })

            */
        
        return (
            <Grid className="subreddit-selection" centered>
                <Grid.Row>
                    <Grid.Column width={2}>
                        <Image
                            label={{ as: 'a', color: 'blue', content: 'AskReddit', ribbon: true }}
                            src={askRedditPic}
                        />
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Image
                            label={{ as: 'a', color: 'red', content: 'Braves', ribbon: true }}
                            src={askRedditPic}
                          

                        />
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Image
                            label={{ as: 'a', color: 'yellow', content: 'JavaScript', ribbon: true }}
                            src={askRedditPic}
                           

                        />
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Image
                            label={{ as: 'a', color: 'green', content: 'ExJw', ribbon: true }}
                            src={askRedditPic}


                        />
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Image
                            label={{ as: 'a', color: 'black', content: 'Science', ribbon: true }}
                            src={askRedditPic}


                        />
                    </Grid.Column>
                    
                    
                </Grid.Row>

            </Grid>
        );
    }
}


export default Subreddits;