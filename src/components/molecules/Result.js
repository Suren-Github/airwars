import * as React from 'react';

const Result = (props) => {

    // The style needs to be moved to the .css file!!!!
    return (
        <h4 style={{color:'orange'}}>{props.total}</h4>
    )
}

export default Result;