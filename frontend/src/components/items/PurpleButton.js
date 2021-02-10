import React from 'react';
import {Link} from "react-router-dom";

import './PurpleButton.css';

const PurpleButton = (props) => {

    return (
        <div className="purpleButton">
            <Link to={props.link}>{props.text}</Link>
        </div>
    );

};

export default PurpleButton;