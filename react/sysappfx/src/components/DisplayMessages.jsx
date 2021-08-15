import React from 'react';


const MessageDisplay = (props) => {
    return (
        <>
            <h1>Current Message</h1>
            <ol>
                {
                    props.message.map((items, i) => {
                        return (<li key={i}>{items}</li>)
                    })
                }
            </ol>
        </>
    );
};

export default MessageDisplay;
