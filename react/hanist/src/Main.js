import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Papa from './PersonForm';
import Mama from './ProductForm';
import Layth from './ProductsList';

const Main = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            });
    }, [loaded])

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId));
    }
    const createProduct = product => {
        axios.post('http://localhost:8000/api/product', product)
            .then(res=>{
                setProducts([...products, res.data]);
            })
    }

    return (
        <div>
            <Papa />
            <Mama onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription="" />
            <hr />
            {loaded && <Layth products={products} removeFromDom={removeFromDom} />}
        </div>
    )
}

export default Main;