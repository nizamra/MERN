import React, { useState } from 'react'

const ProductForm = (props) => {
    const { initialTitle, allErrors, initialPrice, initialDescription, onSubmitProp } = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp(
            { title, price, description }
        );
        setTitle("");
        setPrice("");
        setDescription("");
    }

    return (
        <>
            <h2>Product Manager</h2>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Title</label><br />
                    <input
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title} />
                    {allErrors.title ?
                        <p style={{ color: 'red' }}>{allErrors.title.message}</p> : ''
                    }
                </p>
                <p>
                    <label>Price</label><br />
                    <input
                        type="text"
                        onChange={(e) => setPrice(e.target.value)}
                        value={price} />
                    {allErrors.price ?
                        <p style={{ color: 'red' }}>{allErrors.price.message}</p> : ''
                    }
                </p>
                <p>
                    <label>Descriptione</label><br />
                    <input
                        type="text"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description} />
                    {allErrors.description ?
                        <p style={{ color: 'red' }}>{allErrors.description.message}</p> : ''
                    }
                </p>
                <input type="submit" />
            </form>
        </>
    )
}

export default ProductForm;