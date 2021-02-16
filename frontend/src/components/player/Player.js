import React, { Component } from 'react';

import './Player.css';

class Player extends Component {

    state = {
        player: true
    }

    onPlay = () => {
        this.setState({player: !this.state.player})
    }

    render() {

        return (
            <div className="player">

                <div className="player_informations">
                    {this.state.player ?
                        <div className="player_informations_pause" onClick={this.onPlay}></div>:
                        <div className="player_informations_play" onClick={this.onPlay}></div>
                    }
                    
                </div>

            </div>
        );

    }

}

export default Player;