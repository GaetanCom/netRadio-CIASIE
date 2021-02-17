import React from 'react';
import './Checkbox.css';

const Checkbox = props => {
    return (
        <div className="checkbox">
            <p>
        <input type="checkbox" class="switch" id="switch" />
        <label for="switch"></label>
        </p> 
        </div>
    )
}

export default Checkbox;