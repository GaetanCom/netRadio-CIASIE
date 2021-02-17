import React, { useState, useEffect } from 'react';
// import socketIOClient from "socket.io-client";

import './Player.css';

// const ENDPOINT = "http://localhost:19080/player/auditor/play";

const Player = () => {

    const [player, setPlayer] = useState(true);
    // const [response, setResponse] = useState("");

    // useEffect(() => {
    //     const socket = socketIOClient(ENDPOINT);
    //     socket.on("FromAPI", data => {
    //       setResponse(data);
    //     });

    //     return () => socket.disconnect();
    //   }, []);

    const onPlay = () => {

        setPlayer(!player);

        // let socket = socketIOClient(ENDPOINT);
        
        // if(player) {
        //     socket = socketIOClient(ENDPOINT);
        // } else  {
        //     const OTHERENDPOINT = "http://localhost:19080/player/auditor/stop"
        //     socket = socketIOClient(OTHERENDPOINT);
        // }
        
        // socket.on("FromAPI", data => {
        //   setResponse(data);
        // });

        
    }

    return (
        <div className="player">
            <div className="player_informations">
                {player ?
                    <React.Fragment><div className="player_informations_pause" onClick={onPlay}></div></React.Fragment>:
                    <div className="player_informations_play" onClick={onPlay}></div>
                }              
            </div>
        </div>
    );

}

export default Player;