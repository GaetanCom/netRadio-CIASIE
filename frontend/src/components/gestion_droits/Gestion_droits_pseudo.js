import React from 'react';
import './Gestion_droits.css';

const Gestion_droits_pseudo = props => {
    return (
        <div className="gestion_droits_pseudo">
            <label for="scales">{props.pseudo}</label>
            <input type="checkbox" name="scales" />
        </div>
    )
}

export default Gestion_droits_pseudo;