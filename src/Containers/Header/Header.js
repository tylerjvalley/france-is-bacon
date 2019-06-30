import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../Store/Actions';
import { Grid } from 'semantic-ui-react';
import SearchField from '../../Components/Search/Search';
import Subreddits from '../../Components/Subreddits/Subreddits';

//import axios from 'axios';



class Header extends Component {


    handleClick = (props) => {
        this.props.onSubmit(props)
   
    }

    render () {
       
        let subreddits;

        subreddits = this.props.subs.map(sub => {

            return (

                <Subreddits
                    key={sub}
                    sub={sub}
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