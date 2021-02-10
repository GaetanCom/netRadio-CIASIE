import React from 'react';

import MenuItem from '../items/MenuItem';

import './UserMenu.css';

const UserMenu = (props) => {

    return(
        <div className="userMenu">
            {(() => {

                switch(props.user) {
                    case 'announcer':
                        return (
                            <React.Fragment>
                                <MenuItem name="USERNAME"/>
                            </React.Fragment>
                        )
                    case 'auditor':
                        return (
                            <React.Fragment>
                                <MenuItem name="DEMANDES DE DROITS"/> 
                                <MenuItem name="USERNAME"/>
                            </React.Fragment>
                        )
                    case 'admin':
                        return (
                            <React.Fragment>
                                <MenuItem name="DROITS"/> 
                                <MenuItem name="DEMANDES DE DROITS"/> 
                                <MenuItem name="USERNAME"/>                                
                            </React.Fragment>
                        )
                    default:
                        <React.Fragment>
                            <MenuItem name="SE CONNECTER"/>
                        </React.Fragment>
                }

            })}

            {props.user === "visitor" ?
                <MenuItem name="S'INSCRIRE"/>:
                <MenuItem name="SE DECONNECTER"/>
            }
            
        </div>
    );

}

export default UserMenu;