import { Link } from '@reach/router';
import React from 'react'
import DeleteButton from './DeleteButton';
import { Button } from '@material-ui/core';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

const ProductsList = (props) => {
    const { products, setProducts } = props;
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId))
    }

    return (
        <div>
            <h3>entering the List of All</h3>
            {products.map((product, idx) => {
                return <p key={idx}>
                    <Link to={`/product/${product._id}`}>
                        {product.title}
                    </Link>
                    <p>{product.price}, {product.description}</p>
                    <p>{product.createdAt}</p>
                    |
                    <Link to={"/" + product._id + "/edit"}>
                        <Button id="bu" type="submit" variant="outlined" endIcon={<CreateOutlinedIcon />} color="primary" />
                    </Link>
                    |
                    <DeleteButton productId={product._id} successCallback={() => removeFromDom(product._id)} />
                </p>
            })}
        </div>
    )
}

export default ProductsList;