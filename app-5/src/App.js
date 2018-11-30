import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './components/Image.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image 
        picture={'http://placekitten.com/1280/720'}/>
      </div>
    );
  }
}

export default App;
