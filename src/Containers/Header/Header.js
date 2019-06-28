import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../Store/Actions';
import SearchField from '../../Components/Search/Search';
import Subreddits from '../../Components/Subreddits/Subreddits';


class header extends Component {

    render () {

       
         
        return (
            <>
            <div className="header">
                <h1 className="title">France Is Bacon</h1>
                <SearchField search={this.props.onSearch} /> 
            </div>
                <Subreddits />
           
           </>
          
        ); 
    }

}


const mapStateToProps = state => {

    return {
        src: state.src.searched,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearch: () => dispatch(actions.search()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(header);