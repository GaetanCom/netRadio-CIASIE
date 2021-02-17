import React, { useState, useEffect } from 'react';
import socketIOClient from "socket.io-client";

import './Player.css';

const ENDPOINT = "http://localhost:19080";

const Player = () => {

    const [player, setPlayer] = useState(false);
    const [response, setResponse] = useState("");

    useEffect(() => {
        const socket = socketIOClient(ENDPOINT + "/play/auditor/play");
        socket.on("FromAPI", data => {
          setResponse(data);
        });

        return () => socket.disconnect();
      }, []);

    const onPlay = () => {

        setPlayer(!player);

        let socket = socketIOClient(ENDPOINT+ "/play/auditor/play");
        
        if(player) {
            socket = socketIOClient(ENDPOINT+ "/play/auditor/play");
        } else  {
            socket = socketIOClient(ENDPOINT+ "/play/auditor/play");
        }
        
        socket.on("FromAPI", data => {
          setResponse(data);
        });

        
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