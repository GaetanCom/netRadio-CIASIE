import React from 'react';

import PurpleButton from '../items/PurpleButton';
import MenuItem from '../items/MenuItem';

import './UserMenu.css';

const UserMenu = (props) => {

    switch(props.user) {
        case 'announcer':
            return (
                <div className="userMenu">
                    <MenuItem name="USERNAME"/>
                    {props.user === "visitor" ?
                        <PurpleButton text="S'INSCRIRE" link="/register"/>:
                        <PurpleButton text="SE DECONNECTER" link="/disconnected"/>
                    }
                </div>
            )
        case 'auditor':
            return (
                <div className="userMenu">
                    <MenuItem name="DEMANDES DE DROITS"/> 
                    <MenuItem name="USERNAME"/>
                    {props.user === "visitor" ?
                        <PurpleButton text="S'INSCRIRE" link="/register"/>:
                        <PurpleButton text="SE DECONNECTER" link="/disconnected"/>
                    }
                </div>
            )
        case 'admin':
            return (
                <div className="userMenu">
                    <MenuItem name="DROITS"/> 
                    <MenuItem name="DEMANDES DE DROITS"/> 
                    <MenuItem name="USERNAME"/>  
                    {props.user === "visitor" ?
                        <PurpleButton text="S'INSCRIRE" link="/register"/>:
                        <PurpleButton text="SE DECONNECTER" link="/disconnected"/>
                    }                              
                </div>
            )
        default:
            return(
                <div className="userMenu">
                    <MenuItem name="SE CONNECTER"/>
                    {props.user === "visitor" ?
                        <PurpleButton text="S'INSCRIRE" link="/register"/>:
                        <PurpleButton text="SE DECONNECTER" link="/disconnected"/>
                    }
                </div>
            )
            
    }

}

export default UserMenu;