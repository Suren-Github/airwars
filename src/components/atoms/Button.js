import React from 'react';

export default class Button extends React.Component {
    
    render() {
        console.log(this.props);
        return <button style={this.props.btnStyle} type='button' name={this.props.values.name} onClick={this.props.onClick}
            disabled={this.props.onDisableDice}>{this.props.values.title}</button>;
    }
}
