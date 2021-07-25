import React, { useState } from 'react';
const PersonCardFn = props => {
    const [state, setState] = useState({
        clickCount: 0
    });
    const handleClick = () => {
    setState({
        clickCount: state.clickCount + 1
    });
}

const [count, setCount] = useState(0);
 
    const handleClickTram = () => {
        setCount(count + 1);
    }

    return(
        <fieldset>
            <h1>{ props.lastName }, { props.firstName }</h1>
            <p>Age: { props.age }</p>
            <p>Hair Color: { props.hairColor }</p>
            <button onClick={ handleClickTram }>Click Me { count }</button>
            <button onClick={ handleClick }>Click Me {state.clickCount}</button>
        </fieldset>
    );
}
export default PersonCardFn