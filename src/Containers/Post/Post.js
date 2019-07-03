import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Image } from 'semantic-ui-react'
import { connect } from 'react-redux';


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
        
        const comments = this.props.coms.map(com => {
            let replies;
            if (com.replies) {
                 replies = com.replies.data.children.map(reply => {
                    return (
                        <div style={{background: 'grey', marginLeft: '15px'}} className="reply">
                            <p>{reply.data.author}</p>
                            <h4>{reply.data.body}</h4>
                        </div>
                    );
                })
                
            }

           return (
               <div className="comment" key={com.id}>
                    <p>By: {com.author}</p>
                    <h4>{com.body}</h4>
                   {replies}

               </div>
            )
        })
       


        return(
            <div className="single-post">
                <Link to="/"><Button>Go Back</Button></Link>
                <div className="single-post-header">
                    <h1>{this.state.postTitle}</h1>
                    <Image src={this.state.image} />
                    <p>{this.state.text}</p>
                    <p>by: {this.state.author}</p>
                </div>
                <div className="comments">
                    {comments}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {

    return {
        coms: state.dis.comments,
        reps: state.dis.reps
    }
}


export default connect(mapStateToProps)(Post);;