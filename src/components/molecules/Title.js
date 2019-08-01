import React, { useState, useEffect } from 'react';

const Title = (props) => {
    // console.log("entered Title.js", props);
    const [name, setName] = useState(props.name);
    useEffect(() => {
        // console.log("entered useEffect in Title.js: ", name);
        // console.log("entered useEffect in Title.js: ", props);
        setName(name);
    }, [name]); // 2nd param makes the useEffect to call only when the value changes. Similar to ComponentWillReceiveProps
    // console.log("entered return of Title.js", name);
    return <h1 className='app-title'>{name}</h1>;
    

    // return <h1>{props.name}</h1>;  
}

export default Title;
// exports.Title = Title;