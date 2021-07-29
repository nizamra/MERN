import React from 'react';


const Foref = (props) => {
    const [myColor, setMyColor] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewColorInput(myColor);
        setMyColor("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>here you can add some buttons for todoings fantastic like plastic in the game</h1>
            <textarea
                rows="4"
                cols="50"
                placeholder="to do for your mooos"
                onChange={(e) => setMyColor(e.target.value)}
                value={myColor}
            ></textarea>
            <input type="submit" value="Add doings for abdullah toqatel" />
        </form>
    );
};

export default Foref