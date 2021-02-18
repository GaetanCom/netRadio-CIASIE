import React, { useState, useEffect } from 'react';
import io from "socket.io-client";

import './Player.css';

const SERVER = "http://localhost:19080";

const Player = () => {

    const [player, setPlayer] = useState(false);
    const [response, setResponse] = useState("");

    useEffect(() => {
        const socket = io(SERVER);
        socket.on("connection", (data) => {
            console.log(`I'm connected with the back-end`);
            setResponse(data);
        });

        return () => socket.disconnect();
    }, []);

    const onPlay = () => {

        setPlayer(!player);
        console.log("Change")

        // let socket = socketIOClient(ENDPOINT+ "/play/auditor/play");
        
        // if(player) {
        //     socket = socketIOClient(ENDPOINT+ "/play/auditor/play");
        // } else  {
        //     socket = socketIOClient(ENDPOINT+ "/play/auditor/play");
        // }
        
        // socket.on("FromAPI", data => {
        //   setResponse(data);
        // });

        
    }

    return (
        <div className="player">
            {response}
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