import React from 'react';
import './Barre_recherche.css';

const Barre_recherche = props => {
    return (
        <div className="barre_recherche">
            <form id="searchbox" method="get" action="/search">
                <input id="barre" name="q" type="text" placeholder="Type here… " />
                <input id="button-submit" type="submit" value="Search" />
            </form>
        </div>
    )
}

export default Barre_recherche;