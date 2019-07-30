// import Constants from '../content/constants';
import {
    FETCH_DICE_HISTORY, UPDATE_DICE_HISTORY,
} from '../content/types';

const initialState = [];

export default function (state = initialState, action) {

    switch (action.type) {
        default:
            return state;
        case FETCH_DICE_HISTORY:
            return state.filter(playerData => playerData.id === action.payload.player.id);
        case UPDATE_DICE_HISTORY:
            return [...state, action.payload];
        
    }
}

