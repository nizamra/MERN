import React from 'react';


const BoxDisplay = (props) => {
    return (
        <>
            <h1>these are your Boxes</h1>
            <div style={{display:'flex'}}>
                {
                    props.everybox.map((items, i) => {
                        
                        return (
                            <div key={i} style={{
                            backgroundColor: items,
                            border:'solid 3px pink',
                            width: '100px',
                            height: '100px'
                        }}> {items}</div>)
                    })
                }
            </div>
        </>
    );
};

export default BoxDisplay;
