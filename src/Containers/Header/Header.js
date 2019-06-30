import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../Store/Actions';
import SearchField from '../../Components/Search/Search';
import Subreddits from '../../Components/Subreddits/Subreddits';
import axios from 'axios';


class Header extends Component {

    state = {
        subImage: '',
    }

    componentDidMount() {
        //const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const apiUrl = 'https://www.reddit.com/';
        const subreddit = this.props.subs
        
        console.log(subreddit)
        
        if (subreddit.length > 0) {
            axios.get(apiUrl + 'r/' + subreddit + '/about.json')
                .then(res => console.log(res.data.data.icon_img))
                .catch(error => console.log(error))
            
           
        }
        
        
        
       
    }

    

    render () {
       
       
        return (
            <>

            <div className="header">
                <h1 className="title">France Is Bacon</h1>
                <SearchField 
                    search={this.props.onSearch}
                    clicked={() => this.props.onSubmit(this.props.src)} /> 
            </div>
                <Subreddits subs={this.props.subs}
                            image={this.state.subImage}
                            
                             />
           
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


export default connect(mapStateToProps, mapDispatchToProps)(Header);