const Constants = {
    title: 'IR Wars', // 'A' will be replaced by the image
    button: {
        roll: {
            name: 'roll',
            title: 'Roll Dice',
        }
    },
    game: {
        coins: 6,
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
        currentPlayer: 1,
        players: {
            1: {
                id: 1,
                uname: 'player1',
                name: 'Player 1',
                logo: '/static/media/avengers.743666bc.png',
                // currentTurn: [],
                diceHistory: {},
                pieces: {},
                // color: '#e33e3e75',
            },
            2: {
                id: 2,
                uname: 'player2',
                name: 'Player 2',
                logo: '/static/media/dc.aed8b3db.png',
                // currentTurn: [],
                diceHistory: {},
                pieces: {},
                // color: '#68e33e75',
            }
        }
    },
    pieces: {
        unspawned: 'Unspawned',
        gameType: {
            eightPieces: 8,
            sixPieces: 6,
        },
        pieceIdAlphabet: 'P',
        piece: { // Template to create the pieces for the players by looping the gameType
            id: null, //could be named as 1p1
            name: null,
            label: '',
            position: null,
            isSpawned: false,
            isReached: false,
        },
    },
    messages: {
        rollDice: `It's your turn. Roll the dice.`,
    }

}

export default Constants;