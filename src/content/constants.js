const constants = {
    title: 'AIR Wars',
    button: {
        roll: {
            name: 'roll',
            title: 'Roll Dice',
        }
    },
    dice: {
        sidesOfDice: 4,
        firstDice: 'firstDice',
        secondDice: 'secondDice',
        twelve: 12,
        noDoubles: [2, 3, 4], //Possible outcomes: 1, 2, 3, 4, 5, 6, 12        
    },
    player: {
        1: {
            id: 1,
            uname: 'player1',
            name: 'Player 1',
            currentTurn: [],
            diceHistory: {}
        },
        2: {
            id: 2,
            uname: 'player2',
            name: 'Player 2',
            currentTurn: [],
            diceHistory: {}
        }
    },
    messages: {
        rollDice: `It's your turn. Roll the dice`,
    }

}

export default constants;