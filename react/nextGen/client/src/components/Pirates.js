import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

export default (props) => {
    const [pirates, setPirates] = React.useState(props.pirates); 

    const deleteing = (id) => {
        axios.delete('http://localhost:8000/api/pirate/' + id)
        .then(() => {
            const newPirates = pirates.filter((pir) => {
                return pir._id !== id
                })
            setPirates(newPirates)
        })
        .catch((err)=>console.log(err))  
    }

    return (
        <>
            <h1>All The Pirates</h1>
            <Link to={"/pirate/new"}>
                <button>
                    Add New Pirates
                </button>
            </Link><br />  
            {pirates.map((pirate, index)=>{
                    return (
                        <div key={index}>
                            <p>{pirate.name}
                            <Link to={"/pirate/" + pirate._id}>
                                <button>
                                    Pirate Details
                                </button>
                            </Link>
                            <button onClick={() => deleteing(pirate._id)}>Delete</button>
                            <Link to={"/pirate/" + pirate._id + "/edit"}>
                                <button>
                                    Pirate Edit
                                </button>
                            </Link>
                            </p>
                        </div>
                    )
            })}
        </>
    )
}