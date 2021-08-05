import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

const Detail = props => {
    const [author, setAuthor] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/author/" + props.id)
            .then(res => {
                console.log("useEffect inside Detail.js");
                setAuthor(res.data);
            })
    }, [props.id])
    return (
        <div>
            <Link to={"/"}>Home</Link>

            <p>Title: {author.name}</p>
            <p>Date of Creation: {author.createdAt}</p>

            <Link to={"/author/" + author._id + "/edit"}>
                Edit
            </Link>
        </div>
    )
}

export default Detail;