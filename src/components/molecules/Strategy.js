import React, { Component } from 'react';



class Strategy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pieces: Object.values(this.props.player[this.props.currentPlayer].pieces),
            strategyMap: {}
        }
    }


    componentWillReceiveProps(nextProps) {
        let pieces = this.state.pieces,
            currenDiceTurn = nextProps.currenDiceTurn,
            strategyMap = {};
        for (let i in pieces) {
            strategyMap[pieces[i].label] = [];
            for (let j in currenDiceTurn) {
                strategyMap[pieces[i].label].push(currenDiceTurn[j]);
            }
        }
        this.setState({ strategyMap });
        console.log('strategyMap: ', strategyMap);

        // let pieces = Object.values(nextProps.player[nextProps.currentPlayer].pieces);
        // console.log('pieces: ', pieces);
        // this.setState({ pieces });
    }


    render() {

        console.log('Player: ', this.state);
        return (
            <div className='container-fluid'>
                <h5> Strategy </h5>
                <h6> Player{this.props.currentPlayer}</h6>
                {/* <div className='row'>
                    <div className='col-md-10'>
                        <ul className='list-style-none'>
                            {this.props.currenDiceTurn.map((values, key) => {
                                return (<li className='display-inline-block strategy-dice-turn' key={key}>{values}</li>);
                            })}
                        </ul>
                    </div>
                </div> */}

                <div className='row'>
                    <div className='offset-md-2 col-md-10 turn-value'>
                        {
                            this.props.currenDiceTurn.map((value) => {
                                return (
                                    <div className='each-turn'>
                                        {value}
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>

                <div className='row'>
                    <div className='col-md-2'>
                        <div>
                            {this.state.pieces.map((piece, key) => {
                                return (<p className='display-inline-block strategy-dice-turn' key={piece.id}>{piece.label}</p>);
                            })}
                        </div>
                    </div>

                    <div>

                        {this.state.pieces.map((piece) => {
                            return (
                                <div className='row'>
                                    <ul>
                                        {this.props.currenDiceTurn.map((value, key) => {
                                            return (
                                                <li className='each-turn'>
                                                    {value}
                                                </li>
                                            )
                                        })
                                        }
                                    </ul>
                                </div>
                            )
                        })}

                        {/* </div> */}
                    </div>
                </div>

            </div >
        );
    }
}

export default Strategy;


//  render() {

//         console.log('Player: ', this.props);
//         return (
//             <div className='container'>
//                 <h5> Strategy </h5>
//                 <h6> Player{this.props.currentPlayer}</h6>
//                 <div className='row'>
//                     <div className='offset-md-4 col-md-8'>
//                         <ul className='list-style-none'>
//                             {this.props.currenDiceTurn.map((values, key) => {
//                                 return (<li className='display-inline-block strategy-dice-turn' key={key}>{values}</li>);
//                             })}
//                         </ul>
//                     </div>
//                 </div>
//                 <div className='row'>
//                     <div className='col-md-4'>
//                         <ul className='list-style-none'>
//                             {Object.keys(this.state.strategyMap).map((piece, key) => {
//                                 return (<li className='strategy-dice-turn' key={key}>{piece}</li>);
//                             })}

//                             {
//                                 Object.keys(this.state.strategyMap).map((value, index) => {
//                                     return (
//                                         <li>
//                                             {this.state.strategyMap[value].map((val, key) =>
//                                                 // <div className='strategy-dice' key={key}>{val}</div>
//                                                 <div style={{width: '20px', height: '20px', background: 'yellow', border: '1px solid black', margin: '5px'}}>{val}</div>
//                                             )}
//                                         </li>
//                                     )
//                                 })}

//                         </ul>
//                     </div>
//                 </div>
//             </div >
//         );
//     }





// render() {

//     console.log('Player: ', this.props);
//     return (
//         <div className='container-fluid'>
//             <h5> Strategy </h5>
//             <h6> Player{this.props.currentPlayer}</h6>
//             <div className='row'>
//                 <div className='col-md-10'>
//                     <ul className='list-style-none'>
//                         {this.props.currenDiceTurn.map((values, key) => {
//                             return (<li className='display-inline-block strategy-dice-turn' key={key}>{values}</li>);
//                         })}
//                     </ul>
//                 </div>
//             </div>
//             <div className='row'>
//                 <div className='col-md-2'>
//                     <ul className='list-style-none'>
//                         {Object.keys(this.state.strategyMap).map((piece, key) => {
//                             return (<li className='strategy-dice-turn' key={key}>{piece}</li>);
//                         })}
//                     </ul>
//                 </div>

//                 <div className='col-md-10'>
//                     <ul className='list-style-none'>
//                         {
//                             Object.keys(this.state.strategyMap).map((value, index) => {
//                                 return (
//                                     <li className='display-inline-block'>
//                                         <ul className='list-style-none' style={{ display: 'flex', padding: 0 }}>
//                                             {this.state.strategyMap[value].map((val, key) =>
//                                                 // <div className='strategy-dice' key={key}>{val}</div>
//                                                 <li className='strategy-dice-turn'>{ }</li>
//                                             )}
//                                         </ul>
//                                     </li>
//                                 )
//                             })}

//                     </ul>
//                 </div>
//             </div>
//         </div >
//     );
// }