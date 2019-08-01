import * as React from 'react';
import Constants from './../../content/constants';

const Result = (props) => {

    // The style needs to be moved to the .css file!!!!
    return (
        <div className={'padding10'}>
            <div class={Constants.dice.doubles.some(value => value === props.total) ? "spinner-grow" : "spinner"} role="status">
                <h4 style={{ color: 'orange' }}>{props.total}</h4>
            </div>
        </div>
    )
}

export default Result;