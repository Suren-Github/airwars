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
        // console.log('strategyMap: ', strategyMap);

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
                            this.props.currenDiceTurn.map((value, key) => {
                                return (
                                    <div className='each-turn' key={key}>
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

                        {this.state.pieces.map((piece, index) => {
                            return (
                                <div className='row' key={index}>
                                    <ul>
                                        {this.props.currenDiceTurn.map((value, key) => {
                                            return (
                                                <li className='each-turn' key={key} onClick={() => this.props.validateSelectedValue(value, piece)}>
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
