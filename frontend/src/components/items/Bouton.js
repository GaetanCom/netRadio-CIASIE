import React from 'react';
import './Bouton.css';

const Bouton = props => {
    return (
        <div className="bouton">
            <input class="btn" type="button" value={props.text} />
        </div>
    )
}

export default Bouton;