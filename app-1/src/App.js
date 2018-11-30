import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextComponent from './components/TextComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TextComponent />
      </div>
    );
  }
}

export default App;
