import React from 'react';
import './Textarea.css';

const Textarea = props => {
    return (
        <div className="textarea">
            <textarea id="textarea" name="description"  rows={props.rows} cols={props.cols} >{props.text}</textarea>
        </div>
    )
}

export default Textarea;