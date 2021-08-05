import React from 'react'
import axios from 'axios';
import { Button } from '@material-ui/core';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

const DeleteButton = props => {
    const { productId, successCallback } = props;

    const deleteProduct = e => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                successCallback();
            })
    }

    return (
        <Button id="bu" onClick={deleteProduct} endIcon={<DeleteForeverOutlinedIcon />} variant="contained" color="secondary" />
    )
}
export default DeleteButton