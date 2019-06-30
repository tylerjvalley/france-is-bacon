import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
//const axios = require('axios');



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
                            src={'https://b.thumbs.redditmedia.com/EndDxMGB-FTZ2MGtjepQ06cQEkZw_YQAsOUudpb9nSQ.png'}
                        />
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Image
                            label={{ as: 'a', color: 'red', content: 'Braves', ribbon: true }}
                            src={'https://b.thumbs.redditmedia.com/kMuTetju1XREpLsWsNsfyUPiA1N6WFAzauak575dIrM.png'}
                          

                        />
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Image
                            label={{ as: 'a', color: 'yellow', content: 'JavaScript', ribbon: true }}
                            src={'https://a.thumbs.redditmedia.com/zDOFJTXd6fmlD58VDGypiV94Leflz11woxmgbGY6p_4.png'}
                           

                        />
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Image
                            label={{ as: 'a', color: 'green', content: 'ExJw', ribbon: true }}
                            src={'https://b.thumbs.redditmedia.com/3C8w0x5TOPdkD9uEFWTCAN6g6mGB6WXm3Gw4T4DDsAs.png'}


                        />
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Image
                            label={{ as: 'a', color: 'black', content: 'FreeFolk', ribbon: true }}
                            src={'https://b.thumbs.redditmedia.com/9xyq1XmYTr6-QDGGX-lcr5RpLNMmXR2c-RgiyNbJHGk.png'}


                        />
                    </Grid.Column>
                    
                    
                </Grid.Row>

            </Grid>
        );
    }
}


export default Subreddits;