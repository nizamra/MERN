import React from 'react';
import axios from 'axios';
const Tamara = props => {
    const [peoples, setPeople] = React.useState();
    React.useEffect(() => {
        axios.get("https://swapi.dev/api/people/"+props.id)
        .then(response => setPeople(response.data)) },[props.id])
        console.log(peoples);
    return (
        <>
        <p>here is the numper you've choosen {props.id}</p>
        {peoples.name}
        {peoples.height}
        {peoples.skin_color}
        </>
    )
}
export default Tamara