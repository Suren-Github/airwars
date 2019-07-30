import React from 'react';

const PlayerDetails = (props) => {
    debugger;
    if(!props.player) {
        return null
    }
    return (
        <div>
            <h2>{props.player.name}</h2>
            <h5>{props.player.currentTurn.toString()}</h5>
            <h5>{props.player.diceHistory.toString()}</h5>
        </div>
    );
};

export default PlayerDetails;