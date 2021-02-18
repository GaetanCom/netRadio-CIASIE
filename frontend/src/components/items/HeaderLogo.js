import React from 'react';

import './HeaderLogo.css';
import logo from '../../assets/logo.png'

const HeaderLogo = (props) => {
    return (
        <div id="headerLogo">
            <img 
                src= {logo}
                alt="logo de Net'Radio c'est un micro en néon violet entopuré d'un néon vert marquant Net'Radio"
            />    
        </div>

    );
};

export default HeaderLogo;