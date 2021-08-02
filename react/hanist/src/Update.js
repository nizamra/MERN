import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import ProductForm from './ProductForm';

const Update = props => {
    const { id } = props;
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false);
    // const [price, setPrice] = useState();
    // const [description, setDescription] = useState('');
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
                console.log("Omar is updating");
                // setPrice(res.data.price);
                // setDescription(res.data.description);
            })
    }, [id])
    const updateProduct = (product)=> {
        axios.put('http://localhost:8000/api/product/' + id, 
            product
            // title,
            // price,
            // description,
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
                <ProductForm
                    onSubmitProp={updateProduct}
                    initialTitle={product.title}
                    initialPrice={product.price}
                    initialDescription={product.description}
                />
            )}
            {/* <form onSubmit={updateProduct}>
                <p>
                    <label>Title: </label><br />
                    <input type="text"
                        name="title"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price: </label><br />
                    <input type="text"
                        name="price"
                        value={price}
                        onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description: </label><br />
                    <input type="text"
                        name="description"
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <input type="submit" />
            </form> */}
        </div>
    )
}

export default Update