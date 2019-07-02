import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'


class Post extends Component {
    state ={

    }



    render() {
        return(
            <div className="single-post">
                <Link to="/"><Button>Go Back</Button></Link>
                <h1>Post</h1>
            </div>
        );
    }
}


export default Post;