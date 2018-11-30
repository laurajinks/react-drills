import React, { Component } from 'react';

export default class List extends Component {
    constructor () {
        super ();
        this.state = {
            cats: [
                "Othello",
                "Augustus",
                "Aurora",
                "Athena"
            ]
            }
        }

    render () {

        let displayArray = this.state.cats.map((element, index) => {
        return (
            <h3 key = {index}>{element}</h3>
        )
        })

        return (
            <div>
                {displayArray}
            </div>
        );
    }

}
