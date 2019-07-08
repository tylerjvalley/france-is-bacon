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

        let commentStyle, replyStyle, titleStyle, subtext_styles;

        if (this.props.theme === 'default') {
            commentStyle = 'comments';
            replyStyle = 'reply';
            titleStyle = 'post-title-default';
            subtext_styles = 'subtext';
        } else if (this.props.theme === 'night'){
            commentStyle = 'comments-night';
            replyStyle = 'replies-night';
            titleStyle = 'post-title-night';
            subtext_styles = 'subtext-night';
        }
        
        const comments = this.props.coms.map(com => {
            let replies;
            if (com.replies) {
                 replies = com.replies.data.children.map(reply => {
                    
                    return (
                        <div key={reply.data.id} className={replyStyle}>
                            <p>{reply.data.author}</p>
                            <h4>{reply.data.body}</h4>
                        </div>
                    );   
                    
                })
                
            }

           return (
               <>
               <div className={commentStyle} key={com.id}>
                    <p>{com.author}</p>
                    <h4>{com.body}</h4>
                   
               </div>
               { replies }
               <hr />
               </>
            )
        })
       


        return(
            <div className="single-post">
                <Link to="/"><Button>Go Back</Button></Link>
                <div className="single-post-header">
                    <h1 className={titleStyle}>{this.state.postTitle}</h1>
                    <Image src={this.state.image} />
                    <p className={subtext_styles}>{this.state.text}</p>
                    <p className={subtext_styles}>by: {this.state.author}</p>
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
        reps: state.dis.reps,
        theme: state.dis.theme
    }
}


export default connect(mapStateToProps)(Post);;