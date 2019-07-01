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
            posts.forEach(post => {
                this.setState({
                    posts: this.state.posts.concat(post.data)
                })
            })
            console.log(this.state.posts);  
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


        let main; 

        if (this.state.posts.length > 0) {
            main =  (
                <Main
                    subreddit_title={this.state.posts[0].subreddit_name_prefixed}
                    post_title={this.state.posts[0].title}
                    post_preview={this.state.posts[0].thumbnail}
                    num_comments={this.state.posts[0].num_comments.toString()}
                    score={this.state.posts[0].score.toString()}
                    author={this.state.posts[0].author}
                    //Get time created and create a function that tells the user how long ago it was created
                     />
            )
        }


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