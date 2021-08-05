import { Link } from '@reach/router';
import React from 'react'
import DeleteButton from './DeleteButton';
import { Button, Paper, Card, CardContent } from '@material-ui/core';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

const AuthorsList = (props) => {
    const { authors, setAuthors } = props;
    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId))
    }

    return (
        <div>
            <Card>
                <CardContent>
                    <h3>entering the List of All Authors</h3>
                </CardContent>
            </Card>

            {authors.map((author, idx) => {
                return (
                    <>
                        <Paper elevation={8} key={idx}>
                            <p>
                                Name:<Link to={`/author/${author._id}`}>
                                    {author.name}
                                </Link>
                                <p>Created at: {author.createdAt}</p>

                                <Link to={"/author/" + author._id + "/edit"}>
                                    <Button id="bu" type="submit" variant="outlined" endIcon={<CreateOutlinedIcon />} color="primary" />
                                </Link>

                                <DeleteButton authorId={author._id} successCallback={() => removeFromDom(author._id)} />
                            </p>
                        </Paper>
                    </>
                )
            })}
        </div>
    )
}

export default AuthorsList;