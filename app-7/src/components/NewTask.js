import React, {Component} from 'react';

export default class NewTask extends Component {
    constructor () {
        super();
        this.state = {
        userInput: ''
        }
    
    this.updateUserInput = this.updateUserInput.bind(this);
    this.handleAdd = this.handleAdd.bind(this);

}

updateUserInput (value) {
    this.setState({userInput: value});
}

handleAdd () {
    this.props.add(this.state.userInput);
    this.setState({userInput: ''});
}

render () {
    return (
        <div>
            <input value={this.state.userInput}
            placeholder='Enter task'
            onChange={(e) => this.updateUserInput(e.target.value)}/>
        
            <button onClick={this.handleAdd}>Add</button>
        </div>
    )
}

}