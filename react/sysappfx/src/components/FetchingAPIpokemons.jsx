import React from 'react'

const AAPPIIZ = (props) => {
    const [people, setPeople] = React.useState([]);
 
    React.useEffect(() => {
        fetch('https://swapi.dev/api/people/')
            .then(response => response.json())
            .then(response => setPeople(response.results))
    }, []);
 
    return (
        <div>
            {people.length > 0 && people.map((person, index)=>{
                return (<h4 key={index}>{person.name} {person.gender}</h4>)
            })}
        </div>
    );
}
export default AAPPIIZ

// fetch("https://pokeapi.co/api/v2/pokemon")
//           .then(response => {
//             return response.json();
//         }).then(response => {
//             console.log(response);
//         }).catch(err=>{
//             console.log(err);
//         });

//         let response = await fetch("https://pokeapi.co/api/v2/pokemon");

