import React from 'react';
import './Gestion_droits.css';

const Gestion_droits_entete_liste = props => {
    return (
        <div className="gestion_droits_entete_liste">
            <div class="entete_pseudo">Pseudo</div>
            <div class="entete_droits">Droits</div>
        </div>
    )
}

export default Gestion_droits_entete_liste;