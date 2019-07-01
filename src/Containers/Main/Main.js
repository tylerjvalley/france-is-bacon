import React from 'react';
import { Icon, Image } from 'semantic-ui-react'


const main = (props) => (


    <div className="main-content">

        <div className="sub-title">
            <h4>{props.subreddit_title}</h4>
        </div>

        <div className="posts">

            <div className="post">

                <h4 className="post-title">
                    {props.post_title}
                </h4>

                <Image src={props.post_preview} />
            </div>
            <div className="post-info">
                <Icon name="arrow alternate circle up outline" /> {props.score} <Icon name="arrow alternate circle down outline" /> {props.num_comments} <Icon name="comment outline" /> <br/>
                by {props.author} | 12 hours ago
            </div>

        </div>

    </div>

);


export default main;