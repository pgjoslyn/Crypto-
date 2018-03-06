import React, { Component } from 'react';
import './App.css';
import Title from './components/Title'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello, World!</h1>
        <Title />
      </div>
    );
  }
}

export default App;
