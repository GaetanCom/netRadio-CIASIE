import React from 'react';
import {CSSTransition} from 'react-transition-group';

import './hamburgerItem.css';

const hamburgerItem = (props) => {

    return(

        <CSSTransition
            in={props.menuOverlay}
            timeout={1000}
            classNames="OverlayMenuNavigation-hamburger"
            
        >
            <div className="hamburgerItem" onClick={props.clicked}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </CSSTransition>

       

    );

};

export default hamburgerItem;