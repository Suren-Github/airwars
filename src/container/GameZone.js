import React from 'react';

import { connect } from 'react-redux';
import { fetchDiceHistory, updateDiceTurns, updatePlayerDetails, fetchPlayerDetail } from '../actions';

import _ from 'lodash';

import Constants from '../content/constants';
import PlayerDetails from '../components/molecules/PlayerDetails';


class GameZone extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
               
        };
    }

    

    render() {
        // console.log('DiceZone :', this.state);
        // console.log('Render: ',Constants);
        return (
            <div className='container-fluid'>
               GameZone
            </div >
        );
    };
};

const mapStateToProps = state => ({
   
});

const mapDispatchToProps = dispatch => {
    return {
        
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameZone);