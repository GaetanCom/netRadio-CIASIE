import React from 'react';
import './Gestion_droits.css';

const Gestion_droits_recherche = props => {
    return (
        <div className="gestion_droits_recherche">
            <label for="name">Rechercher un utilisateur</label>

            <input type="text" name="barre_recherche" required minlength="4" maxlength="30" size="50"></input>
        </div>
    )
}

export default Gestion_droits_recherche;