import React from 'react';

import Button from './../atoms/Button';

import Constants from './../../content/constants';

// Q: Can't I use the functional component to call a method from the parent component?

export default class Roll extends React.Component {
    render() {
        return <Button values={Constants.button.roll} onClick={this.props.onClickRoll} onDisableDice={this.props.onDisableDice} btnStyle={this.props.btnStyle} />;
    }
}
