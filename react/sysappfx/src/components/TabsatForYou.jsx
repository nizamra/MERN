import React from 'react';

const Tabss = (props) => {
    const [txtx, setTxtx] = React.useState("");
    const sayHello = (e, i) => {
        e.preventDefault();
        setTxtx("this is the box number "+ (i+1)+ " in the list");
    }
    return (
        <>
            <h2>these are your Boxes</h2>
            {
                Array.from({ length: props.howManyDoYouWant }, (x, i) => {
                    return (
                        <button key={i} onClick={(e) => sayHello(e, i)} > tab #{i+1}</button>)

                }
                )
            }
                        <div>{txtx}</div>
        </>
    );
};

export default Tabss
