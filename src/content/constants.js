const constants = {
    title: 'IR Wars', // 'A' will be replaced by the image
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
        doubles: [1, 5, 6, 12]    
    },
    player: {
        1: {
            id: 1,
            uname: 'player1',
            name: 'Player 1',
            logo: '/static/media/avengers.743666bc.png',
            currentTurn: [],
            diceHistory: {}
        },
        2: {
            id: 2,
            uname: 'player2',
            name: 'Player 2',
            logo: '/static/media/dc.aed8b3db.png',
            currentTurn: [],
            diceHistory: {}
        }
    },
    messages: {
        rollDice: `It's your turn. Roll the dice`,
    }

}

export default constants;