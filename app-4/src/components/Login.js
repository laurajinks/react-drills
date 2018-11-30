import React, { Component } from 'react';

export default class Login extends Component {
    constructor () {
        super ();
        this.state = {
        username: '',
        password: '',
        }

        this.updateUser = this.updateUser.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.handleButton = this.handleButton.bind(this);
    }

    updateUser (value) {
        this.setState({username: value})
    }

    updatePassword (value) {
        this.setState({password: value})
    }

    handleButton () {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`);
    }

    render () {
        return (
            <div>

                <input type='text'
                placeholder='Username'
                onChange={(e) => {this.updateUser(e.target.value)}}></input>

                <input type='text'
                placeholder='Password'
                onChange={(e) => {this.updatePassword(e.target.value)}}></input>
                <button onClick={this.handleButton}>Login</button>

            </div>
        )
    }
}