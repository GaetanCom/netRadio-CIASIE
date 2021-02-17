import React from 'react';
import './Label.css';

const Label = props => {
    return (
        <label className="label">{props.text}</label>
    )
}

export default Label;