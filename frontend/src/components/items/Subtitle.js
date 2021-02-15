import React from 'react';
import './Subtitle.css';

const Subtitle = props => {
    return (
        <p className="subtitle">{props.text}</p>
    )
}

export default Subtitle;