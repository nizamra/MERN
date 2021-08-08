import React, { useState } from 'react'
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import ProductForm from './ProductFormUi';
import DeleteButton from './DeleteButton';

const Update = props => {
    const { id } = props;
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState({ title: "", price: "", description: "" });

    React.useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
                console.log("Omar is updating");
            })
    }, [id])

    const updateProduct = (product) => {
        axios.put('http://localhost:8000/api/product/' + id,product)
            .then(res => navigate('/product/' + id))
            .catch(err => {
                setErrors(err.response.data.errors);
            })
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
                        allErrors={errors}
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