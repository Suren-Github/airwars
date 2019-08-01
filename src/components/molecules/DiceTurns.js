// import React from 'react';
// import Constants from '../../content/constants';

// export default class DiceTurns extends React.Component {
//     render() {
//         return <h4> Dice turns of <i>Player{this.props.playerId}</i>: {this.props.diceHistory.length > 0 ? this.props.diceHistory.toString() : Constants.messages.rollDice} </h4>
//     }
// }

import React from 'react';
import Constants from '../../content/constants';

const DiceTurns = (props) => {
    // useEffect(() => {
    //     alert(8);
    // });

    // return <h4> Dice turns of <i>Player{props.playerId}</i>: {props.diceHistory.length > 0 ? props.diceHistory.toString() : Constants.messages.rollDice} </h4>;
    return (
        <div className="card" style={{width: '500px'}}>
            <div className="card-body">
                <h5 className="card-title">Dice turns of <i>Player{props.playerId}</i>: </h5>
                <p className="card-text"> {props.diceHistory.length > 0 ? props.diceHistory.toString() : Constants.messages.rollDice}</p>
            </div>
        </div>
    )
}

export default DiceTurns;