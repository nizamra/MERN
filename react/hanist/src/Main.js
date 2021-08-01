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
    }, [])
    return (
        <div>
            <Papa />
            <Mama />
            <hr />
            {loaded && <Layth products={products} />}
        </div>
    )
}

export default Main;