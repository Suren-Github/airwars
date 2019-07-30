import {
    UPDATE_PLAYER_DETAILS, FETCH_PLAYER_DETAIL,
} from '../content/types';

const initialState = {};

export default function (state = initialState, action) {

    switch (action.type) {
        default:
            return state;
        case UPDATE_PLAYER_DETAILS:
            return state = action.payload;
        case FETCH_PLAYER_DETAIL:
            console.log(state);
            // return state.player[action.payload];
            // return [...state;
    }
}

