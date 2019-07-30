import { FETCH_DICE_HISTORY, UPDATE_DICE_HISTORY, 
    UPDATE_PLAYER_DETAILS, FETCH_PLAYER_DETAIL } from '../content/types';

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

export const updateDiceHistory = ({player, diceHistory}) => ({
    type: UPDATE_DICE_HISTORY,
    payload: {
        player,
        diceHistory
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