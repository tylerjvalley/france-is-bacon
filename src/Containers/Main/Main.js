import React from 'react';
import { Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


const main = (props) => {

    
    
    let preview_image, post_title;

    if (props.post_preview !== 'self') {
        preview_image = (<Image src={props.post_preview} />)
    } else {
        preview_image = (<Image style={{display: 'none'}} />)
    }

    if (props.post_link) {

        post_title = (
            
            <h4 className="post-title">
                <a href={props.post_link} target="blank">
                    {props.post_title}
                 </a>
            </h4>
       
        ); 
    } else {
        post_title = (
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
        );
    }

    
    

    return (
   
        <div className="post">

            <h4>{props.subreddit_title}</h4>
           
                {post_title}
          
                
            {preview_image}
            
            <div className="post-info">
                <Icon name="arrow alternate circle up outline" /><p className="score-num">{props.score}</p><Icon name="arrow alternate circle down outline" /> <p className="comment-num">{props.num_comments}</p> <Icon name="comment outline" /> <br/>
                by {props.author} | 12 hours ago
            </div>
        </div>
        
    )
};


export default main;