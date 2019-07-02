import React, { Component } from 'react';
import Header from './Containers/Header/Header';
import { BrowserRouter as Router, Route }  from 'react-router-dom'
import Post from './Containers/Post/Post';
import './App.css';


class App extends Component {

  render () {
    
  return (

      <div className="App">
       <Router>
          <Route path="/" exact component={Header} />
          <Route 
            path="/post/" 
            render={(props) => <Post {...props} isAuthed={true}/>} />
          <footer></footer>
        </Router>
      </div>
    );

  }
}

export default App;
