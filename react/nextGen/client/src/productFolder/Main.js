import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from './ProductFormUi';
import AllProds from '../views/ProductsListUi';

const Main = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState({ title: "", price: "", description: "" });

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            });
    }, [])

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }

    const createProduct = product => {
        axios.post('http://localhost:8000/api/product', product)
            .then(res => {
                setProducts([...products, res.data]);
                setErrors({ title: "", price: "", description: "" });
            })
            .catch(err => {
                setErrors(err.response.data.errors);
            })
    }

    return (
        <div>
            <ProductForm onSubmitProp={createProduct} allErrors={errors} initialTitle="" initialPrice="" initialDescription="" />
            <hr />
            {loaded && <AllProds products={products} setProducts={setProducts} removeFromDom={removeFromDom} />}
        </div>
    )
}

export default Main;