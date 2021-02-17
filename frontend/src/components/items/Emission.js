import React from 'react';
import './Emission.css';

const Emission = props => {
    return (
        <div className="emission">
            <div class="c1">
            <div class="name">{props.name}</div>
            <div class="ecouter"><a href={props.ecouter}>écouter</a></div>
            </div>

            <div class="c1">
            <div class="presenter">par {props.presenter}</div>
            <div class="category">{props.category}</div>
            </div>

            <div class="guests">avec {props.guests}</div>

            <div class="text">{props.text}</div>
        </div>
    )
}

export default Emission;