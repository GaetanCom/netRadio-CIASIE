import React from 'react';

import MenuItem from '../items/MenuItem';

import './MainMenu.css'

const mainMenu = () => {

    return(
        <div className="mainMenu">
            <MenuItem name="ACCUEIL"/>
            <MenuItem name="PROGRAMMATION"/>
            <MenuItem name="LIVE"/>
            <MenuItem name="PODCASTS"/>
        </div>
    );

};

export default mainMenu