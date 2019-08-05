import {
    FETCH_DICE_HISTORY, UPDATE_DICE_TURNS,
} from '../content/types';

const initialState = {
    player1: [],
    player2: []
};

export default function (state = initialState, action) {

    switch (action.type) {
        default:
            return state;
        case FETCH_DICE_HISTORY:
            return state.filter(playerData => playerData.id === action.payload.player.id);
        case UPDATE_DICE_TURNS:
            console.log('UPDATE_DICE_TURNS: ', state, action);
            //if(action.payload.diceDetails.id === )
            // state[action.payload.diceDetails.uname].push(action.payload.diceDetails.turns);
            // return Object.assign({}, state[action.payload.diceDetails.uname], action.payload.diceDetails.turns);


            // https://stackoverflow.com/questions/40911194/how-do-i-add-an-element-to-array-in-reducer-of-react-native-redux
            return {
                ...state,
                [action.payload.diceDetails.uname]: [...state[action.payload.diceDetails.uname], action.payload.diceDetails.turns]

                // return { 
                //    ...state,
                //  projectList: [...state.projectList, ...action.payload]
                // }
            }
        // return [...state, action.payload.diceDetails.uname:[...state[action.payload.diceDetails.uname, action.payload.diceDetails.turns]]];

    }
}

