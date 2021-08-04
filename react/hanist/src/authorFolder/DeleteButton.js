import React from 'react'
import axios from 'axios';
import { Button } from '@material-ui/core';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';


const DeleteButton = props => {
    const { authorId, successCallback } = props;

    const deleteAuthor = e => {
        axios.delete('http://localhost:8000/api/author/' + authorId)
            .then(res => {
                successCallback();
            })
    }

    return (
        <Button id="bu" onClick={deleteAuthor} endIcon={<DeleteForeverOutlinedIcon/>} variant="contained" color="secondary"  />
    )
}
export default DeleteButton