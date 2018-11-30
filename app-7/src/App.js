import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List'
import NewTask from './components/NewTask'

class App extends Component {
  constructor () {
    super ();

    this.state = {
      taskList: [],
    };
    this.addTask = this.addTask.bind(this);
  }

  addTask (task) {
    this.setState({ taskList: [...this.state.taskList, task] })
  }

  render() {
    return (
      <div className="App">
        <h1>To Do List</h1>
        <NewTask add={this.addTask} />
        <List tasks={this.state.taskList}/>
      </div>
    );
  }
}

export default App;
