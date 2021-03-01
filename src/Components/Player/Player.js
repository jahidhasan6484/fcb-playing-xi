import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faStar } from '@fortawesome/free-solid-svg-icons'
import './Player.css';

const Player = (props) => {
    const { photo, name, jersey_number, position, footed, national_team, age, weekly_wages, annual_salary } = props.player;
    return (
        <div className="player">
            <div>
                <img src={photo} alt="" />
            </div>
            <div>
                <h1 className="player-name">{name}</h1>
                <br />
                <h5>National Team: {national_team}</h5>
                <p>Jersey Number: {jersey_number}</p>
                <p>Position: {position}</p>
                <p>Footed: {footed}</p>
                <p>Age: {age}</p>
                <p>Weekly Wages: € {weekly_wages}</p>
                <p>Annual Salary: € {annual_salary}</p>
                <br />
                <p>Fitness Today:  <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                </p>
                <br />
                <button
                    className="btn btn-success"
                    onClick={() => props.handleAddPlayer(props.player)}
                >
                    <FontAwesomeIcon icon={faPlus} /> Add to XI
                    </button>
            </div>
        </div>
    );
};

export default Player;