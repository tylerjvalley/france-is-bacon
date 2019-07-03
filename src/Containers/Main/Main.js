import React from 'react';
import { Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


const main = (props) => {

    
    
    let preview_image;

    if (props.post_preview !== 'self') {
        preview_image = (<Image src={props.post_preview} />)
    } 

    return (
   
        <div className="post">

            <h4>{props.subreddit_title}</h4>
            <h4 className="post-title">
                <Link onClick={props.postClicked}
                        to={{
                            pathname: '/post/',
                            state: {
                                postTitle: props.post_title,
                                image: props.post_preview,
                                text: props.post_text,
                                author: props.author,
                                comments: props.comments
                        }
                }}>{props.post_title}</Link>
            </h4>
                
            {preview_image}
            
            <div className="post-info">
                <Icon name="arrow alternate circle up outline" /><p className="score-num">{props.score}</p><Icon name="arrow alternate circle down outline" /> <p className="comment-num">{props.num_comments}</p> <Icon name="comment outline" /> <br/>
                by {props.author} | 12 hours ago
            </div>
        </div>
        
    )
};


export default main;