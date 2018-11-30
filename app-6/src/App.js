import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo'

class App extends Component {
  constructor () {
    super ();

    this.state = {
      taskList: [],
      userInput: ''
    };


  this.addTask = this.addTask.bind(this);

  }

  updateUserInput (value) {
    this.setState({userInput: value});
  }

  addTask () {
    this.setState({
      taskList: [...this.state.taskList, this.state.userInput],
      userInput: ''
    });
  }

  render() {

    let taskList = this.state.taskList.map( (element, index) => {
      return (
        <Todo key={index} task={element} />
      )
    })

    return (
      <div className="App">
          <h1>To Do List</h1>
        
        <div>
        <input value={this.state.userInput}
        placeholder='Enter task'
        onChange={(e) => this.updateUserInput(e.target.value)}/>
        
        <button onClick={this.addTask}>Add</button>
        </div>
        
        <br/>
        {taskList}
      </div>
    );
  }
}

export default App;
