import React, { useEffect, useState } from 'react'
import axios from 'axios';
import FormingAnAuthor from './AuthorForm';
import AuthorsList from './AuthorsList';

const Main = () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState();
    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then(res => {
                console.log("useEffect inside author Main.js");
                setAuthors(res.data);
                setLoaded(true);
            });
    })

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId));
    }
    const createAuthor = author => {
        console.log(author)
        axios.post('http://localhost:8000/api/author', author)
            .then(res => {
                setAuthors([...authors, res.data]);
                setErrors("");
            })
            .catch(err => {
                setErrors(err.response.data.errors);
            })
    }

    return (
        <div>
            <FormingAnAuthor onSubmitProp={createAuthor} allErrors={errors} initialTitle="" />
            <hr />
            {loaded && <AuthorsList authors={authors} setAuthors={setAuthors} removeFromDom={removeFromDom} />}
        </div>
    )
}

export default Main;