import React from 'react';

export default function Image (props) {
        return (
        <div>
            <img src={props.picture} alt='an adorable placeholder kitten image'></img>
        </div>
        )
    }