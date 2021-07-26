import React from 'react'

const AAPPIIZ = (props) => {
    const [people, setPeople] = React.useState([]);

    const LaythBzoor = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=7&offset=21')
        .then(response => response.json())
        .then(response => setPeople(response.results))
    }

    return (
        <div>
            <button onClick={LaythBzoor}>generate pokemons</button>
            <ul>
            {people.length > 0 && people.map((person, index) => {
                return (<li key={index}>{person.name}</li>)
            })}</ul>
        </div>
    );
}
export default AAPPIIZ