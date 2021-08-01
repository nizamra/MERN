import { Link } from '@reach/router';
import React from 'react'
import axios from 'axios';

const ProductsList = (props) => {
    const { removeFromDom } = props;

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }
    return (
        <div>
            {props.products.map((product, idx) => {
                return <p key={idx}>
                    <Link to={`/product/${product._id}`}>
                        {product._id}, {product.title}, {product.price}, {product.description}, {product.createdAt}
                    </Link>|
                    <button onClick={(e) => { deleteProduct(product._id) }}>
                        Delete
                    </button>
                </p>
            })}
        </div>
    )
}

export default ProductsList;