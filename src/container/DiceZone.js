import React from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchDiceHistory, updateDiceHistory, updatePlayerDetails, fetchPlayerDetail } from '../actions';
// import { includes } from "lodash";
import _ from 'lodash';

import Dice from '../components/molecules/Dice';
import Roll from '../components/molecules/Roll';
import Result from '../components/molecules/Result';
import DiceTurns from '../components/molecules/DiceTurns';
import DiceHistory from '../components/molecules/DiceHistory';

import Constants from '../content/constants';
import PlayerDetails from '../components/molecules/PlayerDetails';

// Q: Why can't I access Constants directly inside methods other than constructor and render?

const constants = Constants,
    btnRoll = {
        display: 'block',
        margin: '0 auto',
    };

class DiceZone extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstDice: 0,
            secondDice: 0,
            totalDiceCount: 0,
            diceHistory: [], // need to include player id in each object
            currentDiceTurn: [], // once the turn ends, entire object will be pushed to diceHistory
            disableDice: false,
            player: {},
        };
    }

    getRandomInt = () => {
        debugger;
        const maxNo = constants.dice.sidesOfDice;
        const firstDice = Math.floor(Math.random() * Math.floor(maxNo)),
            secondDice = Math.floor(Math.random() * Math.floor(maxNo));

        this.setState({ firstDice, secondDice }, () => this.totalDiceCount());
    }

    totalDiceCount = () => {
        let firstDice = this.state.firstDice, secondDice = this.state.secondDice,
            totalDiceCount, disableDice = this.state.disableDice, currentDiceTurn = this.state.currentDiceTurn;

        if (firstDice === 0 && secondDice === 0) {
            totalDiceCount = constants.dice.twelve; // Condition to bring 12 in dice
        } else {
            totalDiceCount = Number(this.state.firstDice) + Number(this.state.secondDice);
        }

        currentDiceTurn = [...currentDiceTurn, totalDiceCount];

        if (_.includes(constants.dice.noDoubles, totalDiceCount)) {
            //disableDice = true;

            let diceHistory = [...this.state.diceHistory, { player: 1, turns: { ...currentDiceTurn } }];
            this.setState({ disableDice, diceHistory });

            // Code to update the diceHistory to the store goes here...
            // this.props.onUpdateDiceHistory(diceHistory[diceHistory.length-1]);
            this.props.onUpdateDiceHistory({ player: this.state.player, diceHistory: currentDiceTurn });

            // return false;
        }

        this.setState({ totalDiceCount, disableDice, currentDiceTurn });
    }

    componentWillMount() {
        const playerData = Constants.player;
        this.props.onUpdatePlayerDetails(playerData);
    }

    componentWillReceiveProps(newProps) {
        this.setState({ player: newProps.data.player.playerDetails });
    }

    render() {
        console.log('DiceZone :', this.state);
        return (
            <div>
                {this.state.player ? <PlayerDetails player={this.state.player[constants.player[1].id]} /> : ''}
                <Dice value={this.state.firstDice} />
                <Dice value={this.state.secondDice} />
                <Roll onClickRoll={this.getRandomInt} onDisableDice={this.state.disableDice} btnStyle={btnRoll} />
                <Result total={this.state.totalDiceCount} />
                <DiceTurns playerId={Constants.player[1].id} diceHistory={this.state.currentDiceTurn} />
                {this.state.player ? <PlayerDetails player={this.state.player[constants.player[2].id]} /> : ''}
                <hr />
                {/* <DiceHistory /> */}
            </div>
        );
    };
};

const mapStateToProps = state => ({
    data: state
});

const mapDispatchToProps = dispatch => {
    return {
        // onFetchDiceHistory: playerData => {
        //     dispatch(fetchDiceHistory(playerData));
        // },

        // onUpdateDiceHistory: diceHistory => {
        //     dispatch(updateDiceHistory(diceHistory));
        // }
        onUpdatePlayerDetails: (playerData) => {
            dispatch(updatePlayerDetails(playerData));
        },

        onFetchPlayerDetail: (playerId) => {
            dispatch(fetchPlayerDetail(playerId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiceZone);