import React from 'react';


const Faraman = (props) => {
    const [txty, setTxty] = React.useState("");
    
    const noMondays = new Promise((resolve, reject) => {
        if (new Date().getDay() !== 1) {
            resolve("Good, it's not Monday!");
        } else {
            reject("Someone has a case of the Mondays!");
        }
    });
    noMondays
        .then(res => setTxty(res))
        .catch(err => setTxty(err));
    return (
        <>

            <h3>Current faraman</h3>
            <p>{txty}</p>

        </>
    );
};




export default Faraman