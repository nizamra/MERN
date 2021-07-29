import React from 'react';


const NaserNawwab = (props) => {
    return (
        <>
            <h1>these are your Boxes</h1>
            <div>
                {
                    props.everybox.map((items, i) => {

                        return (
                            <>
                                <input type="checkbox" id="subscribeNews" name="subscribe" value="newsletter"></input>
                                <label for="subscribeNews">{items}</label>
                                <br />
                            </>
                        )
                    })
                }
            </div>
        </>
    );
};

export default NaserNawwab
