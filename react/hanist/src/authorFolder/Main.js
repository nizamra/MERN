import React, { useEffect, useState } from 'react'
import axios from 'axios';
import FormingAnAuthor from './AuthorForm';
import AuthorsList from './AuthorsList';

const Main = () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState({});
    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then(res => {
                setAuthors(res.data);
                setLoaded(true);
            });
    }, [])

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId));
    }
    const createAuthor = author => {
        axios.post('http://localhost:8000/api/author', author)
            .then(res => {
                setAuthors([...authors, res.data]);
            })
            .catch(err => {
                setErrors(err.response.data.errors);
            })
    }

    return (
        <div>
            <FormingAnAuthor onSubmitProp={createAuthor} allErrors={errors} initialTitle="" />
            <hr />
            {loaded && <AuthorsList authors={authors} removeFromDom={removeFromDom} />}
        </div>
    )
}

export default Main;