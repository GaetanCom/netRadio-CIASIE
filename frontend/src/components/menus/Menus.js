import React, { Component } from 'react';

import HamburgerItem from '../items/hamburgerItem';
import MainMenu from './mainMenu';
import UserMenu from './UserMenu';

import './Menu.css';

class Menu extends Component {
    render(){

        // const user = "auditor";
        const user = "visitor";
        // const user = "admin";
        // const user = "announcer";

        return(
            <div className="menu">
                <div className="menu-header">
                    <HamburgerItem />
                </div>

                <div className="menu-body">
                    <MainMenu />
                    <UserMenu user={user}/>
                </div>
                
            </div>
        );
    }
}

export default Menu;