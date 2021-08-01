import React from 'react'
// import axios from 'axios';
const ProductsList = (props) => {
    return (
        <div>
            {props.products.map((person, idx)=>{
                return <p key={idx}>{person._id}, {person.title}, {person.price}, {person.description}, {person.createdAt}</p>
            })}
        </div>
    )
}

export default ProductsList;