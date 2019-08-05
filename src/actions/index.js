import {
    FETCH_DICE_HISTORY, UPDATE_DICE_TURNS,
    UPDATE_PLAYER_DETAILS, FETCH_PLAYER_DETAIL
} from '../content/types';

// export function fetchDiceHistory() {
//     return function(dispatch ) {

//     }
// }
// export const fetchDiceHistory = ({player}) => ({
//     type: FETCH_DICE_HISTORY,
//     payload: {
//         player
//     }
// })

// export const updateDiceHistory = diceDetails => { console.log('ACTIONS', diceDetails);
// return ({
//     type: UPDATE_DICE_HISTORY,
//     payload: {
//         diceDetails
//     }
// })
// }

export const updateDiceTurns = diceDetails => ({

    // Keep array structure as {player1 : [], player2: []}
    type: UPDATE_DICE_TURNS,
    payload: {
        diceDetails
    }
})

export const updatePlayerDetails = (playerDetails) => ({
    type: UPDATE_PLAYER_DETAILS,
    payload: {
        playerDetails
    }
});

export const fetchPlayerDetail = (playerId) => ({
    type: FETCH_PLAYER_DETAIL,
    payload: playerId
});