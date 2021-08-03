import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import ProductForm from './ProductForm';
import DeleteButton from './DeleteButton';

const Update = props => {
    const { id } = props;
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
                console.log("Omar is updating");
            })
    }, [id])

    const updateProduct = (product)=> {
        axios.put('http://localhost:8000/api/product/' + id, {
            product
    }
        )
            .then(res => console.log(res));
        navigate('/product/' + id);
    }

    return (
        <div>
            <Link to={'/product/' + id}>
                Cancel
            </Link>
            <h1>Update this Product</h1>
            {loaded && (
                <>
                <ProductForm
                    onSubmitProp={updateProduct}
                    initialTitle={product.title}
                    initialPrice={product.price}
                    initialDescription={product.description}
                />
                <DeleteButton productId={product._id} successCallback={() => navigate("/")} />
                </>
            )}
        </div>
    )
}

export default Update