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
                <SearchField 
                    search={this.props.onSearch}
                    clicked={() => this.props.onSubmit(this.props.src)} /> 
            </div>
                <Subreddits subs={this.props.subs} />
           
           </>
          
        ); 
    }

}


const mapStateToProps = state => {

    return {
        src: state.src.searched,
        subs: state.src.subreddits
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearch: (e) => dispatch(actions.search(e)),
        onSubmit: (value) => dispatch(actions.submit(value))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(header);