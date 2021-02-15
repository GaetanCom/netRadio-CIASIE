import React from 'react';
import './Subtitle.css';

const Subtitle = props => {
    return (
        <h2 className="subtitle">{props.text}</h2>
    )
}

export default Subtitle;