import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Detail = props => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + props.id)
            .then(res => setProduct(res.data))
    }, [])
    return (
        <div>
            <p>Title: {product.title}</p>
            <p>Price each: {product.price}</p>
            <p>About: {product.description}</p>
            <p>Date of Creation: {product.createdAt}</p>
        </div>
    )
}

export default Detail;