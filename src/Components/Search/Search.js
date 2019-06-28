import React, { Component } from 'react';
import { Search, Button } from 'semantic-ui-react';


class SearchField extends Component {


    state = {}

    handleSubmit = (e) => {
        e.preventDefault();
    }

   render() {

   
    return (
        <form onSubmit={(e) => this.handleSubmit(e)}>
            <div className="search-area">
                <Search
                    onSearchChange={(e) => this.props.search(e.target.value)} />
                <Button onClick={this.props.clicked}>Add Subreddit</Button>
            </div>
        </form>
    );
   }
 }




export default SearchField;

