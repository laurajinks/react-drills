import React, { Component } from 'react';

export default class ArrayComponent extends Component {
    constructor () {
        super ();
        this.state = {
            filterString: '',
            cats: [
                'Othello',
                'Augustus',
                'Aurora',
                'Athena'
            ] }
        }

    updateArray (value) {
        this.setState({filterString: value})
    }

    

    render () {

        let filteredArray = this.state.cats.filter((element, index) => {
            return element.includes(this.state.filterString);
            }).map((element, index) => {
                return <h3 key={index}>{element}</h3>;
                })
        

        return (
            <div>
                <input type='text'
                onChange={(e) => this.updateArray(e.target.value)}></input>
                <h3>{filteredArray}</h3>
            
            </div>
        );
    }
}