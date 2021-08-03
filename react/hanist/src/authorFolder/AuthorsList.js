import { Link } from '@reach/router';
import React from 'react'
import DeleteButton from './DeleteButton';

const AuthorsList = (props) => {
    const [authors, setAuthors] = React.useState(props.authors);
    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId))
    }

    return (
        <div>
            <h3>entering the List of All Authors</h3>
            {authors.map((author, idx) => {
                return <p key={idx}>
                    <Link to={`/author/${author._id}`}>
                        {author.name}, {author.createdAt}
                    </Link>
                    |
                    <Link to={"/author/" + author._id + "/edit"}>
                        Edit
                    </Link>
                    |
                    <DeleteButton authorId={author._id} successCallback={() => removeFromDom(author._id)} />
                </p>
            })}
        </div>
    )
}

export default AuthorsList;