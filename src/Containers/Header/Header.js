import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../Store/Actions';
import { Grid } from 'semantic-ui-react';
import SearchField from '../../Components/Search/Search';
import Main from '../Main/Main';
import Subreddits from '../../Components/Subreddits/Subreddits';
import { fetchSubPosts, checkSubreddit, fetchPostComments } from '../../Store/Actions/fetchSubs';

class Header extends Component {

    state = {
        posts: [],
        isValid: true,
    }

    
    
    handleClick = (props) => {
        
        checkSubreddit(props).then(res => {
            if (res === true) {
                this.setState({isValid: true}, () => {
                    this.props.onSubmit(props)
                })
            } else {
                this.setState({isValid: false}, () => {
                    alert('Invalid Subreddit')
                })
            }

        })
        
        
    }

    handleSubClick = (props) => {
        fetchSubPosts(props).then(posts => {
            this.setState({posts: posts});
            
        });
        
    }

    handlePostClick = (sub, id) => {
        
        const commentsArray = [];

       fetchPostComments(sub, id).then(res => {
           res.map(comment => {
               commentsArray.push(comment.data);
               return commentsArray         
           })
           this.props.onClickPost(commentsArray);
       })

    }



    render () {
       
        let subreddits;

        subreddits = this.props.subs.map(sub => {

            return (

                <Subreddits
                    clicked={() => this.handleSubClick(sub)}
                    key={sub}
                    sub={sub}
                />
            )


        })


         const main = this.state.posts.map(post => {
            return (
                <Main
                    postClicked={() => this.handlePostClick(post.data.subreddit, post.data.id)}
                    key={post.data.id}
                    subreddit_title={post.data.subreddit_name_prefixed}
                    post_title={post.data.title}
                    post_preview={post.data.thumbnail}
                    post_text={post.data.selftext}
                    num_comments={post.data.num_comments.toString()}
                    score={post.data.score.toString()}
                    author={post.data.author}
                //Get time created and create a function that tells the user how long ago it was created
                />    
            )
        })
       


        return (
            <>

            <div className="header">
                <h1 className="title">France Is Bacon</h1>
                <SearchField 
                    search={this.props.onSearch}
                    clicked={() => this.handleClick(this.props.src)} /> 
            </div>
            <Grid className="subreddit-selection" centered>
                <Grid.Row>
                    {subreddits}
                </Grid.Row>
            </Grid>
            
            <div className="main-content">
                    {main}
            </div>
                
           </>
          
        ); 
    }

}


const mapStateToProps = state => {

    return {
        src: state.src.searched,
        subs: state.src.subreddits,
        coms: state.dis.comments 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearch: (e) => dispatch(actions.search(e)),
        onSubmit: (value) => dispatch(actions.submit(value)),
        onClickPost: (comments) => dispatch(actions.displayPostComments(comments))
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);