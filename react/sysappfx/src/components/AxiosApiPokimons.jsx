import React from 'react';
import axios from 'axios';

const Raddad = props => {
    const [responseData, setResponseData] = React.useState([]);

   const nizam=(e)=>{


axios.get('https://pokeapi.co/api/v2/pokemon?limit=7&offset=21')

.then(response => setResponseData(response.data.results))
};

return (
<div>
    <button onClick={nizam}>generate pokemons</button>
    <ul>
    {responseData.length > 0 && responseData.map((responseData, index) => {
        return (<li key={index}>{responseData.name}</li>)
    })}</ul>
</div>
);
}

export default Raddad