import React from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchDiceHistory, updateDiceTurns, updatePlayerDetails, fetchPlayerDetail } from '../actions';
// import { includes } from "lodash";
import _ from 'lodash';

import Dice from '../components/molecules/Dice';
import Roll from '../components/molecules/Roll';
import Result from '../components/molecules/Result';
import DiceTurns from '../components/molecules/DiceTurns';
// import DiceHistory from '../components/molecules/DiceHistory';

import Constants from '../content/constants';
import PlayerDetails from '../components/molecules/PlayerDetails';
import Strategy from './../components/molecules/Strategy';

// Q: Why can't I access Constants directly inside methods other than constructor and render?

//  const constants = Constants;
const btnRoll = {
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
            currentPlayer: 1,
            strategyMapping: {}
        };

        // console.log('Constructor: ',Constants);
    }

    getRandomInt = () => {
        // console.log('getRandomInt: ',Constants);
        const maxNo = Constants.dice.sidesOfDice;
        const firstDice = Math.floor(Math.random() * Math.floor(maxNo)),
            secondDice = Math.floor(Math.random() * Math.floor(maxNo));

        this.setState({ firstDice, secondDice }, () => this.totalDiceCount());
    }

    totalDiceCount = () => {
        let firstDice = this.state.firstDice, secondDice = this.state.secondDice,
            totalDiceCount;
        // currentDiceTurn = this.state.currentDiceTurn;

        if (firstDice === 0 && secondDice === 0) {
            totalDiceCount = Constants.dice.twelve; // Condition to bring 12 in dice
        } else {
            totalDiceCount = Number(this.state.firstDice) + Number(this.state.secondDice);
        }

        let currentDiceTurn = [...this.state.currentDiceTurn, totalDiceCount],
            mappingIndex = Object.keys(this.state.strategyMapping || 0).length, // O to be set as initial condition when the object is empty
            strategyMapping = {...this.state.strategyMapping, [mappingIndex]: { id: mappingIndex, totalDiceCount, assignedToPlayer: this.state.currentPlayer, isAssigned: false }}; // Swapping currently player will be resolved automatically during the flow

        if (_.includes(Constants.dice.noDoubles, totalDiceCount)) {

            this.props.onUpdateDiceTurns({ uname: Constants.player.players[this.state.currentPlayer].uname, turns: currentDiceTurn });

            this.setState({ currentDiceTurn: currentDiceTurn, currentPlayer: this.state.currentPlayer === Constants.player.player1 ? Constants.player.player2 : Constants.player.player1, strategyMapping }); //disableDice: true,


            // this.setState({currentPlayer: currentPlayer === 1 ? 2 : 1});

            // let diceHistory = [...this.state.diceHistory, { uname: 'player1', turns: { ...currentDiceTurn } }];

            // // Code to update the diceHistory to the store goes here...
            // // this.props.onUpdateDiceHistory(diceHistory[diceHistory.length-1]);
            // //this.props.onUpdateDiceHistory({ player: this.state.player, diceHistory: currentDiceTurn });
            // this.props.onUpdateDiceHistory({ data: diceHistory[diceHistory.length - 1]});
            // this.setState({currentDiceTurn: [], disableDice, diceHistory});
            return false;
        }

        this.setState({ totalDiceCount, currentDiceTurn: currentDiceTurn, strategyMapping });
    }

    /** Generates piece structure for both the players. Included to the playerData object  */
    generatePieces(pieceCount, piece) {

        let p1Pieces = {}, p2Pieces = {};

        for (let count = 1; count <= pieceCount; count++) {
            const p1PieceId = Constants.player.players[1].id + Constants.pieces.pieceIdAlphabet + count,
                p2PieceId = Constants.player.players[2].id + Constants.pieces.pieceIdAlphabet + count;
            // constants = Constants; // ? Unable to access Constants directly!
            let p1Piece = {
                id: p1PieceId,
                name: count,
                label: Constants.pieces.pieceIdAlphabet + count,
                position: piece.position,
                isSpawned: piece.isSpawned,
                isReached: piece.isReached
            },
                p2Piece = {
                    id: p2PieceId,
                    name: count,
                    label: Constants.pieces.pieceIdAlphabet + count,
                    position: piece.position,
                    isSpawned: piece.isSpawned,
                    isReached: piece.isReached
                };

            p1Pieces[p1PieceId] = p1Piece;
            p2Pieces[p2PieceId] = p2Piece;
        }

        // console.log(p1Pieces, p2Pieces);
        return { p1Pieces, p2Pieces };
    }

    spawnPiece(value, piece) {
        console.log("entered spawn piece");

        
        debugger;
        
        console.log(this.state);
        // this.state.strategyMapping;
        // Move the coin to position based on the current player and update the object 'this.state.player[strategyMappedValue.assignedToPlayer].pieces[piece.id].position = ' and update isSpawned state to true of the selected piece
    }

    movePiece(value, piece) {
        console.log("entered move piece");
    }

    validateSelectedValue = (value, piece) => {
        debugger;
        console.log(value, piece);
        console.log(this.state);
        let pieces = this.state.player[this.state.currentPlayer].pieces;


        // Temporary condition - To be removed: (By default, the currentPlayer will work)
        piece.id = this.state.currentPlayer === 1 ? '1P1' : '2P1';


        // Check if the value is not already been assigned to any of the piece in the strategyMapping
        !pieces[piece.id].isSpawned && value === Constants.dice.spawnValue ? this.spawnPiece(value, piece) : this.movePiece(value, piece);
        // Need to update the Strategy box with tick mark
    }

    componentWillMount() {
        // ? Unable to use Constant inside componentWillMount's object; Instead call as local constant(Here, playerData)
        const pieces = this.generatePieces(Constants.pieces.gameType.sixPieces, Constants.pieces.piece), // Hardcoded pieces for now. Later there will be a select screen before the start of the game
            playerData = Constants.player;

        playerData.players[playerData.players[1].id].pieces = pieces.p1Pieces;
        playerData.players[playerData.players[2].id].pieces = pieces.p2Pieces;

        this.props.onUpdatePlayerDetails(playerData);
    }

    componentWillReceiveProps(newProps) {
        this.setState({ player: newProps.data.player.playerDetails.players });
    }

    render() {
        // console.log('DiceZone :', this.state);
        // console.log('Render: ',Constants);
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className="container">
                            <div className='col-md-11'>
                                <div className='player-details'>
                                    {Object.keys(this.state.player).length !== 0 ? <PlayerDetails player={this.state.player[Constants.player.players[1].id]} /> : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='display-inline-block'>
                            <Dice value={this.state.firstDice} />
                            <Dice value={this.state.secondDice} />
                            <Roll onClickRoll={this.getRandomInt} onDisableDice={this.state.disableDice} btnStyle={btnRoll} />

                            <Result total={this.state.totalDiceCount} />

                            <DiceTurns playerId={this.state.currentPlayer} diceHistory={this.state.currentDiceTurn} />
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="container">
                            <div className='col-md-11'>
                                <div className='player-details'>
                                    {/* {this.state.player ? <PlayerDetails player={this.state.player[Constants.player[2].id]} /> : ''} */}
                                    {Object.keys(this.state.player).length !== 0 ? <PlayerDetails player={this.state.player[Constants.player.players[2].id]} /> : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='offset-md-2 col-md-8'>
                        {this.state.player && this.state.currentDiceTurn.length > 0 ?
                            <Strategy player={this.state.player} currentPlayer={this.state.currentPlayer} currenDiceTurn={this.state.currentDiceTurn} validateSelectedValue={this.validateSelectedValue}></Strategy>
                            : ''
                        }
                    </div>
                </div>
            </div >
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

        onUpdateDiceTurns: diceDetails => {
            // console.log("DICE DETAILS: ", diceDetails);
            dispatch(updateDiceTurns(diceDetails));
        },

        onUpdatePlayerDetails: (playerData) => {
            dispatch(updatePlayerDetails(playerData));
        },

        onFetchPlayerDetail: (playerId) => {
            dispatch(fetchPlayerDetail(playerId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DiceZone);