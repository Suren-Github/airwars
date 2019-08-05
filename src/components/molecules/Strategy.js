import React, { Component } from 'react';



class Strategy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pieces: '',
        }
    }

    componentWillReceiveProps(nextProps) {
        let pieces = Object.values(nextProps.player[nextProps.currentPlayer].pieces);
        this.setState({ pieces });
    }

    render() {
        debugger;
        console.log('Player: ', this.props);
        return (
            <div>
                <h5> Strategy </h5>
                <h6> Player{this.props.currentPlayer}</h6>
                <div>
                    <ul className='list-style-none'>
                        {this.props.currenDiceTurn.map((values, key) => {
                            return (<li className='display-inline-block strategy-dice-turn' key={key}>{values}</li>);
                        })}
                    </ul>
                </div>
                <div>
                    <ul className='list-style-none'>
                        {this.state.pieces.length > 0 ? this.state.pieces.map((piece, key) => {
                            return (<li className='strategy-dice-turn' key={key}>{piece}</li>);
                        }) : ''}
                    </ul>
                </div>
            </div >
        );
    }
}

export default Strategy;


{/* <table className="table table-striped table-bordered">
    <thead>
        <tr>
            <th>
                Pieces vs Values
                            </th>
            {this.props.currenDiceTurn.map((values, key) => {
                return (<th key={key}>{values}</th>);
            })}
        </tr>
    </thead>
    <tbody>
        <tr>
            {Object.values(this.props.player[this.props.currentPlayer].pieces).map((piece, index) => {
                return (<th key={index}>{piece.label}</th>);
            })}
        </tr>
    </tbody>
</table> */}