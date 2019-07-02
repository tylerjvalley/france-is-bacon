import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Image } from 'semantic-ui-react'


class Post extends Component {
    state = {
        postTitle: '',
        image: '',
        text: '',
        comments: [],
        author: '',
    }

    componentDidMount() {
        //const { header } = this.props.match.params
        const { postTitle, image, text, comments, author } = this.props.location.state
        this.setState({
            postTitle: postTitle,
            image: image,
            text: text,
            comments: comments,
            author: author
        })
        
    }

    render() {
        return(
            <div className="single-post">
                <Link to="/"><Button>Go Back</Button></Link>
                <div className="single-post-header">
                    <h1>{this.state.postTitle}</h1>
                    <Image src={this.state.image} />
                    <p>{this.state.text}</p>
                    <p>comment icons... upvote/downvote icons and score by {this.state.author}</p>
                </div>
                <div className="comments">
                    <p>username...comment score....time</p>
                    <h4>user comment</h4>
                </div>

               
            </div>
        );
    }
}


export default Post;