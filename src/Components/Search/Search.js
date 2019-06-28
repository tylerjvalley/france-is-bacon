import React from 'react';
import { Search, Button } from 'semantic-ui-react';


const searchField= (props) => {

   
    return (
        <form onSubmit={(e) => this.handleSubmit(e)}>
            <div className="search-area">
                <Search
                    onSearchChange={props.search} />
                <Button type="submit">Add Subreddit</Button>
            </div>
        </form>
    );
 }




export default searchField;

