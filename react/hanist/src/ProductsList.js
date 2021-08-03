import { Link } from '@reach/router';
import React from 'react'
import DeleteButton from './DeleteButton';

const ProductsList = (props) => {
    const [products, setProducts] = React.useState(props.products);
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId))
    }

    return (
        <div>
            <h3>entering the List of All</h3>
            {products.map((product, idx) => {
                return <p key={idx}>
                    <Link to={`/product/${product._id}`}>
                        {product.title}, {product.price}, {product.description}, {product.createdAt}
                    </Link>
                    |
                    <Link to={"/" + product._id + "/edit"}>
                        Edit
                    </Link>
                    |
                    <DeleteButton productId={product._id} successCallback={() => removeFromDom(product._id)} />
                </p>
            })}
        </div>
    )
}

export default ProductsList;