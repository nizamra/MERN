import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { navigate, Link } from '@reach/router';

export default props => {
    const [name, setName] = useState(""); 
    const [image, setImage] = useState("");
    const [treasures, setTreasures] = useState("");
    const [catche, setCatche] = useState("");
    const [position, setPosition] = useState("");
    const [pegLeg, setPegLeg] = useState(true);
    const [eyePatch, setEyePatch] = useState(true);
    const [hookHand, setHookHand] = useState(true);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirate/" + props.id)
            .then(res =>{ 
                setName(res.data.name);
                setImage(res.data.image);
                setTreasures(res.data.treasures);
                setCatche(res.data.catche);
                setPosition(res.data.position);
                setPegLeg(res.data.pegLeg);
                setEyePatch(res.data.eyePatch);
                setHookHand(res.data.hookHandd)
            })
    }, [props.id])

    const onSubmitHandler = e => {
        e.preventDefault();
        setErrors([]);
        axios.put('http://localhost:8000/api/pirate/' + props.id, {
            name,
            image,
            treasures,
            catche,
            position,
            pegLeg,
            eyePatch,
            hookHand
        })
            .then(() => navigate("/"))
            .catch(err => {
                const errs = [];
                const innerErrors = err.response.data.errors;

                for (const key in innerErrors){
                    errs.push(innerErrors[key].message);
                }
                setErrors(errs);
            })
    }

    return (
      <>
        <h1>Edit This Pirate</h1>
        <Link to={"/"}>
            <button>
                All Pirates Page
            </button>
        </Link><br />        
        {errors.map((err, i) => (
            <p key={i} style={{color: "red"}}>{err}</p>
        ))}
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Pirate Name: </label><br/>
                <input type="text" value={name} onChange = {(e)=>setName(e.target.value)} />
            </p>
            <p>
                <label>Image: </label><br/>
                <input type="text" value={image} onChange = {(e)=>setImage(e.target.value)}/>
            </p>
            <p>
                <label># of Treasure Chests: </label><br/>
                <input type="text" value={treasures} onChange = {(e)=>setTreasures(e.target.value)}/>
            </p>
            <p>
                <label>Pirate Catch Phrase: </label><br/>
                <input type="text" value={catche} onChange = {(e)=>setCatche(e.target.value)}/>
            </p>
            <p>
                <label>Position in Crew: </label><br/>
                <select onChange = {(e)=>setPosition(e.target.value)} name="position" value={position}>
                    <option value="">Select Crew Position</option>
                    <option value="Captain">Captain</option>
                    <option value="First Mate">First Mate</option>
                    <option value="Quarter Master">Quarter Master</option>
                    <option value="Boatswain">Boatswain</option>
                    <option value="Powder Monkey">Powder Monkey</option>
                </select><br></br>
            </p>
            <p>
                <label>Peg Leg: </label><br/>
                <input type="checkbox" value={pegLeg} onChange = {()=>setPegLeg(!pegLeg)} checked={pegLeg}/>
            </p>
            <p>
                <label>Eye Patch: </label><br/>
                <input type="checkbox" value={eyePatch} onChange = {()=>setEyePatch(!eyePatch)} checked={eyePatch}/>
            </p>
            <p>
                <label>Hook Hand: </label><br/>
                <input type="checkbox" value={hookHand} onChange = {()=>setHookHand(!hookHand)} checked={hookHand}/>
            </p>
            <button>Update Pirate</button>
        </form>
    </>
    )
}