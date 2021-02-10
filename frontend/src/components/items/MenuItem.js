import React from 'react';

import './menuItem.css'

const MenuItem = (props) => {

    return (
        <div className="menu_item">
            <a href="/">{props.name}</a>
        </div>
    );

}

export default MenuItem;