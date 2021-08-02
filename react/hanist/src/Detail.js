import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

const Detail = props => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + props.id)
            .then(res => setProduct(res.data))
            console.log("Omar is right Here in Details");
    }, [props.id])
    return (
        <div>
            <Link to={"/"}>Home</Link>

            <p>Title: {product.title}</p>
            <p>Price each: {product.price}</p>
            <p>About: {product.description}</p>
            <p>Date of Creation: {product.createdAt}</p>

            <Link to={"/product/" + product._id + "/edit"}>
                Edit
            </Link>
        </div>
    )
}

export default Detail;