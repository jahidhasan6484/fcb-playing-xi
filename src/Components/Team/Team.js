import React, { useEffect, useState } from 'react';
import allData from '../Data/data.json';
import Player from '../Player/Player';
import TotalPlayer from '../Total_player/TotalPlayer';
import './Team.css';

const Team = () => {
    // console.log(allData);
    const [players, setPlayer] = useState([]);
    const [totalPlayers, setTotalPlayer] = useState([]);

    useEffect(() => {
        setPlayer(allData);
        // console.log(allData);
    }, [])

    const handleAddPlayer = (player) => {
        const newTotalPlayer = [...totalPlayers, player];
        setTotalPlayer(newTotalPlayer);
    }

    return (
        <div className="team-container">
            <div className="player-profile">
                {
                    players.map(player => <Player
                        handleAddPlayer={handleAddPlayer}
                        player={player}>
                    </Player>)
                }
            </div>
            <div className="cart-container">
                <TotalPlayer totalPlayers={totalPlayers}> </TotalPlayer>
            </div>
        </div>
    );
};

export default Team;