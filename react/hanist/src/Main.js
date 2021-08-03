import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Papa from './PersonForm';
import Mama from './ProductForm';
import AllProds from './ProductsList';

const Main = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState({}); 
    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
                console.log("Main Methods are Effective");
                console.log(products);
                console.log("inside main"+errors);
            });
        }, [])
        
        const removeFromDom = productId => {
            setProducts(products.filter(product => product._id !== productId));
        }
        const createProduct = product => {
            axios.post('http://localhost:8000/api/product', product)
            .then(res=>{
                setProducts([...products, res.data]);
                console.log("Fully Completed");
            })
            .catch(err=>{
                // console.log(err.response.data.errors);
                // const r = err.response.data.errors;
                // const e = Object.keys(r);
                setErrors(err.response.data.errors);
            })   
    }

    return (
        <div>
            <Papa />
            <Mama onSubmitProp={createProduct} allErrors={errors} initialTitle="" initialPrice="" initialDescription="" />
            <hr />
            {loaded && <AllProds products={products} removeFromDom={removeFromDom} />}
        </div>
    )
}

export default Main;