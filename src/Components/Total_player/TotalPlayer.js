import React from 'react';
import './TotalPlayer.css';

const TotalPlayer = (props) => {
    const totalPlayers = props.totalPlayers;

    const selectOne = totalPlayers.map(player => <li>{player.name}</li>)

    const totalCost = totalPlayers.reduce((total, player) => total + player.weekly_wages, 0)

    return (
        <div className="total-player">
            <h2>Selected Player: {totalPlayers.length}</h2>
            <h4>Weekly Wages (Total): €  {totalCost}</h4>
            <br /><br />
            <h4>Playing XI: {selectOne}</h4>
        </div>
    );
};

export default TotalPlayer;