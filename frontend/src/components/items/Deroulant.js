import React from 'react';

import './Deroulant.css';

const Deroulant = (props) => {
    return (
        <form>
            <select name={props.name}>
                {props.options.map((option) => (
                    <option> {option} </option>
                ))}
            </select>
        </form>
    );
};


export default Deroulant;