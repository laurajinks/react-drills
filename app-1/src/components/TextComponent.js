import React, {Component} from 'react'

export default class TextComponent extends Component {
    constructor () {
        super ();
        this.state = {
            userInput: '',
            result: ''
        }
    }

    handleChange (value) {
        this.setState({result: value})
    }

    render () {
        return (
            <div>
                <input type='text'
                onChange={(e) => this.handleChange(e.target.value)}></input>
                <h3>{this.state.result}</h3>
            </div>
        );
    }
}