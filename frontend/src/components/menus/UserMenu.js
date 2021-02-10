import React from 'react';
import Switch, { Case, Default } from 'react-switch-case';

import MenuItem from '../items/MenuItem';

import './UserMenu.css';

const UserMenu = (props) => {

    return(
        <div className="userMenu">
            <Switch condition={props.user}>
                <Case value="visitor">
                    <MenuItem name="SE CONNECTER"/>
                </Case>

                <Case value="auditor">
                    <MenuItem name="DEMANDES DE DROITS"/> 
                    <MenuItem name="USERNAME"/>
                </Case>

                <Case value="admin">
                    <MenuItem name="DROITS"/> 
                    <MenuItem name="DEMANDES DE DROITS"/> 
                    <MenuItem name="USERNAME"/>
                </Case>

                <Case value="announcer">
                <MenuItem name="USERNAME"/>
                </Case>
            </Switch>
            {props.user === "visitor" ?
                <MenuItem name="S'INSCRIRE"/>:
                <MenuItem name="SE DECONNECTER"/>
            }
            
        </div>
    );

}

export default UserMenu;