import React, { Component } from 'react';
import Header from './Containers/Header/Header';
import Main from './Containers/Main/Main';
import './App.css';


class App extends Component {

  render () {
    
  return (

      <div className="App">
       
        <Header />
        <Main />
        <footer></footer>
      </div>
    );

  }
}

export default App;
