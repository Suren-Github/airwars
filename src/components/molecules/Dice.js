import * as React from 'react';

const Dice = (props) => {
    const liStyle = {
        listStyleType: 'none',
        border: '1px solid black',
        display: 'inline-block',
        padding: '5px',
        minHeight: '65px',
        minWidth: '13.781px',
        marginLeft: '10px',
        verticalAlign: 'top',
        // transform: 'rotateX(180deg)',
        
    };

    return (
        <ul style={liStyle}>
            {[...Array(props.value)].map((x, i) =>
                <li> &#9673;</li>
            )}
        </ul>        
    )

    // return (
    //     <h5>{props.value}</h5>
    // )
}

export default Dice;