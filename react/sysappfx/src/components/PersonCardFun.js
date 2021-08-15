import React from 'react';
const PersonCardFn = props => {
    const [state, setState] = React.useState({
        clickCount: 0
    });
    const handleClick = () => {
        setState({
            clickCount: state.clickCount + 1
        });
    }

    const [count, setCount] = React.useState(0);

    const handleClickTram = () => {
        setCount(count + 1);
    }

    return (
        <fieldset>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={handleClickTram}>Counter {count}</button>
            <button onClick={handleClick}>Click Bait {state.clickCount}</button>
        </fieldset>
    );
}
export default PersonCardFn