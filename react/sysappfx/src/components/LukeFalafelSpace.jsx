import React, { useState ,useEffect} from 'react';


export default function FruitForm() {
    const [type, setType] = useState("");
    const [idd, setIdd] = useState(0);
    const [resultingData, setResultingData] = useState([]);

    setTimeout(
        useEffect(() => {
        fetch('https://swapi.dev/api/'+type+'/'+idd)
            .then(response => response.json())
            .then(response => setResultingData(response.results))
    }, [type,idd])
      , 10000)

    

    function handleSubmit(event) {
        event.preventDefault();
        console.log("tpe"+type+"num"+idd);
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <select value={type} onChange={e => setType(e.target.value)}>
                <option value="people">people</option>
                <option value="spaceships">Spaceships</option>
                <option value="planets">Planets</option>
                <option value="species">Species</option>
                <option value="Vehicles">Vehicles</option>
            </select>
            <label>
                <input type="number" value={idd} onChange={e => setIdd(e.target.value)} />
            </label>
            <button>SEARCH</button>
        </form>
        <div>name: {resultingData.name}</div>
        </>
    );
}