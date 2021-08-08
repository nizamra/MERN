import React, { useState } from 'react'
import FormControl from '@material-ui/core/FormControl'
import { FormHelperText, InputLabel, Input, Button} from '@material-ui/core'

const ProductForm = (props) => {
    const { initialTitle, allErrors, initialPrice, initialDescription, onSubmitProp } = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({ title, price, description });
        setTitle("");
        setPrice("");
        setDescription("");
    }

    return (
        // <form onSubmit={e => {onSubmitProp(e, {title, price, description})}}>
        <form onSubmit={onSubmitHandler}>
            <h2>Product Manager</h2>
            <FormControl>
                <InputLabel htmlFor="title">Title</InputLabel>
                <Input
                    id="title"
                    aria-describedby="titleErr"
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title} />
                {allErrors.title ?
                    <FormHelperText style={{ color: 'red' }} id="titleErr">{allErrors.title.message}</FormHelperText> : ''}
            </FormControl><br />
            <FormControl>
                <InputLabel htmlFor="price">Price</InputLabel>
                <Input
                    id="price"
                    aria-describedby="priceErr"
                    type="text"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price} />
                {allErrors.price ?
                    <FormHelperText style={{ color: 'red' }} id="priceErr">{allErrors.price.message}</FormHelperText> : ''}
            </FormControl><br />
            <FormControl>
                <InputLabel htmlFor="description">Descriptione</InputLabel>
                <Input
                    id="description"
                    aria-describedby="descriptionErr"
                    type="text"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description} />
                {allErrors.description ?
                    <FormHelperText style={{ color: 'red' }} id="descriptionErr">{allErrors.description.message}</FormHelperText> : ''}
            </FormControl><br />
            <Button type="submit" variant="contained" color="primary"> Add/updata </Button>
        </form>
    )
}

export default ProductForm;