import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../Store/Actions';
import { Grid } from 'semantic-ui-react';
import SearchField from '../../Components/Search/Search';
import Main from '../Main/Main';
import Subreddits from '../../Components/Subreddits/Subreddits';
import { fetchSubPosts } from '../../Store/Actions/fetchSubs';

//import axios from 'axios';



class Header extends Component {

    state = {
        posts: []
    }


    handleClick = (props) => {
        this.props.onSubmit(props)
        
    }

    handleSubClick = (props) => {
        console.log(props)
        fetchSubPosts(props).then(posts => {
            this.setState({posts: posts});
            console.log(this.state.posts[0].data)
           
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
                    key={post.data.id}
                    subreddit_title={post.data.subreddit_name_prefixed}
                    post_title={post.data.title}
                    post_preview={post.data.thumbnail}
                    num_comments={post.data.num_comments.toString()}
                    score={post.data.score.toString()}
                    author={post.data.author}
                //Get time created and create a function that tells the user how long ago it was created
                />    
            )
        })
        /*
        if (this.state.posts.length > 0) {
            main =  (
                <Main
                    subreddit_title={this.state.posts[0].data.subreddit_name_prefixed}
                    post_title={this.state.posts[0].data.title}
                    post_preview={this.state.posts[0].data.thumbnail}
                    num_comments={this.state.posts[0].data.num_comments.toString()}
                    score={this.state.posts[0].data.score.toString()}
                    author={this.state.posts[0].data.author}
                    //Get time created and create a function that tells the user how long ago it was created
                     />
            )
        }
        */


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

                {main}
           </>
          
        ); 
    }

}


const mapStateToProps = state => {

    return {
        src: state.src.searched,
        subs: state.src.subreddits,
        
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearch: (e) => dispatch(actions.search(e)),
        onSubmit: (value) => dispatch(actions.submit(value)),
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);