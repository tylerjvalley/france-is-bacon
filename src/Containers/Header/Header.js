import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../Store/Actions';


class header extends Component {

    render () {

        return (
    
            <div className="header">
                <h1 className="title">France Is Bacon</h1>
                    <nav className="subreddits-selection">
                        <ul class="custom-menu">
                            <li>AskReddit</li>
                            <li>WebDev</li>
                            <li>funny</li>
                        </ul>
                        <div className="search">
                            <input placeholder="Add a Subreddit" maxLength="50" type="text" />
                            <button className="button">Add</button>
                        </div>
                    </nav>
            </div>
        );
    }

}


const mapStateToProps = state => {

    return {
        src: state.src.search,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSearch: () => dispatch(actions.search()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(header);