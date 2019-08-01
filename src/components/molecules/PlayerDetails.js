

// // const PlayerDetails = (props) => {
// //     // Need to check this area!?! Why should we check and return?
// //     if (!props.player) {
// //         return null
// //     }
// //     return (

// //     );
// // };

// import React, { Component } from 'react';

// // console.log(images);



// export default class PlayerDetails extends Component {
//     constructor(props) {
//         super(props);
//         this.images = this.importAll(require.context('./../../content/images/', false, /\.(png|jpe?g|svg)$/));
//     }
//     componentWillReceiveProps(props) {
//         console.log(props);
//     }

//     importAll = (r) => {
//         return r.keys().map(r);
//     }

// const images = importAll(require.context('./../../content/images/', false, /\.(png|jpe?g|svg)$/));

// function importAll(r) {
//     return r.keys().map(r);
// }



// function setImage(img) {
//     debugger;
//     // Need to write condition to support .jpg, .png, .jpeg,
//     // images.some(img.split['.png' || '.jpg' || '.jpeg']);
//     let splitImg = img.split('/');
//     splitImg = splitImg[splitImg.length - 1].split('.')[0];

//     let logo = images.some(img => {
//         console.log('VALUE IMG; ', img.includes(splitImg) ? img : null);
//         return img.includes(splitImg) ? img : null;
//     });

//     return logo;
// }

//     render() {
//         console.log('THIS: ', this.props);
//         return (
//             <div className='card'>
//                 <img src={this.setImage(this.props.player.logo)} className="card-img-top" alt="..." style={imgStyle} ></img>
//                 <div className="card-body">
//                     <h5 className="card-title">{this.props.player.name}</h5>
//                     <p className="card-text">{this.props.player.currentTurn.toString()}</p>
//                     <h2>{this.props.player.name}</h2>
//                     <h5>{this.props.player.currentTurn.toString()}</h5>
//                     <p className="card-text">{this.props.player.diceHistory.toString()}</p>
//                 </div>
//             </div>
//         );
//     }
// }


import * as React from 'react';

const imgStyle = {
    width: '75px',
    height: '75px',
    objectFit: 'contain',
    margin: '0 auto',
};
const cardBg = {
    // background: 'linear-gradient(to left bottom, #2c3271, #f7f8f9)',
    background: '-webkit-gradient(linear, 0% 0%, 0% 100%, from(gray), to(#f7f8f9))'
};

const PlayerDetails = function (props) {

    return (
        <div className={'card'} style={cardBg}>
            <img src={props.player.logo} className="card-img-top" alt="..." style={imgStyle} ></img>
            <div className="card-body">
                <h5 className="card-title">{props.player.name}</h5>
                <p className="card-text">{props.player.currentTurn.toString()}</p>
                <p className="card-text">{props.player.diceHistory.toString()}</p>
            </div>
        </div>
    );

};

export default PlayerDetails;