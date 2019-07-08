import React, { Component } from 'react';
import Header from './Containers/Header/Header';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route }  from 'react-router-dom'
import Post from './Containers/Post/Post';
import './App.css';


class App extends Component {

  render () {

    let body;

    if (this.props.theme === 'default') {
      body = 'App';
    } else if (this.props.theme === 'night') {
      body = 'App-Night';
    }
    
    
  return (

      <div className={body}>
       <Router>
          <Route path="/" exact component={Header} />
          <Route path="/france-is-bacon/" exact component={Header} />
          <Route 
            path="/post/" 
            render={(props) => <Post {...props} isAuthed={true}/>} />
          <footer></footer>
        </Router>
      </div>
    );

  }
}

const mapStateToProps = state => {
  return {
    theme: state.dis.theme
  }
}

export default connect(mapStateToProps)(App);
