import { Link } from '@reach/router';
import React from 'react'
// import axios from 'axios';
const ProductsList = (props) => {
    return (
        <div>
            {props.products.map((person, idx)=>{
                return <p key={idx}> <Link to = {`/product/${person._id}`}>{person._id}, {person.title}, {person.price}, {person.description}, {person.createdAt}</Link> </p>
            })}
        </div>
    )
}

export default ProductsList;