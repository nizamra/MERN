import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import AuthorForm from './AuthorForm';
import DeleteButton from './DeleteButton';

const Update = props => {
    const { id } = props;
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
    }, [id])

    const updateAuthor = (layth) => {
        axios.put('http://localhost:8000/api/author/' + id, layth)
            .then(res => console.log(res));
        navigate('/author/' + id);
    }

    return (
        <div>
            <Link to={'/author/' + id}>
                Cancel
            </Link>
            <h1>Update this Author</h1>
            {loaded && (
                <>
                    <AuthorForm
                        onSubmitProp={updateAuthor}
                        initialName={author.name}
                    />
                    <DeleteButton authorId={author._id} successCallback={() => navigate("/author")} />
                </>
            )}
        </div>
    )
}

export default Update