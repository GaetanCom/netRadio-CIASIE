import React from 'react';

import './hamburgerItem.css';

const hamburgerItem = (props) => {

    return(

        <div className="hamburgerItem" onClick={props.clicked}>
            <span></span>
            <span></span>
            <span></span>
        </div>

    );

};

export default hamburgerItem;