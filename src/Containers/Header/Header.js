import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../Store/Actions';
import { Grid } from 'semantic-ui-react';
import SearchField from '../../Components/Search/Search';
import Main from '../Main/Main';
import Subreddits from '../../Components/Subreddits/Subreddits';
//import ThemeChange from '../../Components/ThemeChange/ThemeChange';
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

    handleThemeSelect = (theme) => {
        this.props.onSelectTheme(theme);
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
                    
            let previewData, postLink;

            if (post.data.url.includes('.jpg') || post.data.url.includes('.png')) {
                previewData = post.data.url;
                postLink = null
            } else if (post.data.is_self) {
                previewData = null;
                postLink = null;
            } else {
                 postLink = `http://www.reddit.com${post.data.permalink}`;
                 previewData = null;
             } 
             
            return (
                <Main
                    postClicked={() => this.handlePostClick(post.data.subreddit, post.data.id)}
                    key={post.data.id}
                    subreddit_title={post.data.subreddit_name_prefixed}
                    post_title={post.data.title}
                    post_link={postLink}
                    post_preview={previewData}
                    post_text={post.data.selftext}
                    num_comments={post.data.num_comments.toString()}
                    score={post.data.score.toString()}
                    author={post.data.author}
                //Get time created and create a function that tells the user how long ago it was created
                />    
            )
        })

        let headerTheme, mainTheme, subTheme;

        if (this.props.theme === 'default') {
            headerTheme = 'header';
            mainTheme = 'main-content';
            subTheme = 'subreddit-selection';
            
        } else if (this.props.theme === 'night') {
            headerTheme = 'nightHeader';
            mainTheme = 'main-content-night';
            subTheme = 'sub-theme-night';
        }
       
       

        return (
            <>

            <div className={headerTheme}>
                <h1 className="title">France Is Bacon</h1>
                <SearchField 
                    search={this.props.onSearch}
                    clicked={() => this.handleClick(this.props.src)} /> 
                <div className="ui compact menu">
                    <div role="listbox" aria-expanded="false" className="ui item simple dropdown" tabIndex="0">
                        <div className="text" role="alert" aria-live="polite" aria-atomic="true">Change Theme</div>
                        <i aria-hidden="true" className="dropdown icon"></i>
                        <div className="menu transition">
                            <div
                                aria-checked="false"
                                aria-selected="true"
                                className="selected item"
                                onClick={() => this.handleThemeSelect('default')}
                            >
                                <span className="text">Default Theme</span>
                            </div>
                            <div
                                aria-checked="false"
                                aria-selected="false"
                                className="item"
                                onClick={() => this.handleThemeSelect('night')}
                            >
                                <span className="text">Night Theme</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            
            <Grid className={subTheme} centered>
                <Grid.Row>
                    {subreddits}
                </Grid.Row>
            </Grid>

            <div className={mainTheme}>
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
        coms: state.dis.comments ,
        theme: state.dis.theme
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearch: (e) => dispatch(actions.search(e)),
        onSubmit: (value) => dispatch(actions.submit(value)),
        onClickPost: (comments) => dispatch(actions.displayPostComments(comments)),
        onSelectTheme: (theme) => dispatch(actions.displayTheme(theme))
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);