import React, { useState } from 'react'
import Button from './Button';

const Project = props => {
    const { title, description } = props;
    // numLikes is a getter , setLikes as a setter 
    const [numLikes, setLikes] = useState(0);
    const [hasLike, setHasLike] = useState(false);
    const clickHandler = (event) => {
        setLikes(numLikes + 1);
        setHasLike(true)

    }
    return (
        <div style={{ border: 'solid 1px black', width: '270px', height: '250px', margin: '15px', padding: '5px', textAlign: 'center', display: 'inline-block' }}>
            <h4>{title}</h4>
            <Button 
                onclickHandler={(event) => clickHandler(event)} 
                text="Like" 
                isDisabled={hasLike}
            />
            <h4>Likes:{numLikes} </h4>
            <h4>Description :</h4>
            <p>{description}</p>
        </div>
    )
}


export default Project
