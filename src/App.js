import React, { Component } from 'react';
import Nav from './components/navbar';

import characters from './characters.json';
import './App.css';

class App extends Component {
  state = {
    characters,
    score: 0,
    highScore: 0
  };



  render() {
    return (
      <Nav />
    )
  }

}

export default App;
