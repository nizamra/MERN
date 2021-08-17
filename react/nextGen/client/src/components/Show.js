import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

export default props => {
    const [pirate, setPirate] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirate/" + props.id)
            .then(res => setPirate(res.data))
    }, [props.id])

    return (
        <div>
            <Link to={"/"}>
                <button>
                    All Pirates Page
                </button>
            </Link><br />
            <h1>{pirate.name}</h1>
            <p>Catch Phrase: {pirate.catche}</p>
            <p>Position: {pirate.position}</p>
            <p>Treasures: {pirate.treasures}</p>
            <p>Peg leg: {pirate.pegLeg ? "Yes" : "No"}</p>
            <p>Eye Patch: {pirate.eyePatch ? "Yes" : "No"}</p>
            <p>Hook Hand: {pirate.hookHand ? "Yes" : "No"}</p>
            <img src={pirate.image} alt={pirate.catche}/><br/>
            <Link to={"/pirate/" + pirate._id + "/edit"}>
                <button>
                    Pirate Edit
                </button>
            </Link>
        </div>
    )
}