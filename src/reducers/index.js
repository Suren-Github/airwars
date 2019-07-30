import { combineReducers } from 'redux';
import diceReducer from './diceReducer';
import playerReducer from './playerReducer';

export default combineReducers({
    dice: diceReducer,
    player: playerReducer,
});

