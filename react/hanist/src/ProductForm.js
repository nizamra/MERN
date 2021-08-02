import React, { useState } from 'react'
// import axios from 'axios';
const ProductForm = (props) => {
    const { initialTitle, initialPrice, initialDescription, onSubmitProp } = props;
    const [title, setTitle] = useState(initialTitle); 
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);
    
    const onSubmitHandler = e => {
        e.preventDefault();
        console.log("Before"+price)
        onSubmitProp(
            {title, price, description}
            );
            console.log("After"+price)
    }
    
    // const onSubmitHandler = e => {
    //     e.preventDefault();
    //     axios.post('http://localhost:8000/api/product', {
    //         title,
    //         price,
    //         description
    //     })
    //         .then(res=>console.log(res))
    //         .catch(err=>console.log(err))
    //     setTitle("");
    //     setPrice("");
    //     setDescription("");
    // }
    return (
        <>
        <h2>Product Manager</h2>
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input 
                type="text" 
                onChange={(e)=>setTitle(e.target.value)}
                value={title}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input 
                type="text" 
                onChange={(e)=>setPrice(e.target.value)}
                value={price}/>
            </p>
            <p>
                <label>Descriptione</label><br/>
                <input 
                type="text" 
                onChange={(e)=>setDescription(e.target.value)}
                value={description}/>
            </p>
            <input type="submit"/>
        </form>
        </>
    )
}

export default ProductForm;