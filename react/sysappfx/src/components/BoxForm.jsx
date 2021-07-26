import React from 'react';


const BoxForm = (props) => {
    const [myColor, setMyColor] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewColorInput(myColor);
        setMyColor("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Choosing Colors Here</h1>
            <textarea
                rows="4"
                cols="50"
                placeholder="Enter a color of your choice"
                onChange={(e) => setMyColor(e.target.value)}
                value={myColor}
            ></textarea>
            <input type="submit" value="Add Here" />
        </form>
    );
};

export default BoxForm;