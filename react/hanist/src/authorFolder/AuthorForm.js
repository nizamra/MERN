import React, { useState } from 'react';
import { Button, Paper, FormControl, InputLabel, OutlinedInput, } from '@material-ui/core';

const styles = {
    paper: {
        width: "20rem", padding: "1rem"
    },
    input: {
        marginBottom: "1rem"
    },
    button: {
        width: "100%"
    }
}

const AuthorForm = (props) => {
    const { initialName, allErrors, onSubmitProp } = props;
    const [name, setName] = useState(initialName);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp(
            { name }
        );
    }

    return (
        <>
            <Paper elevation={2} style={styles.paper}>
                <h2>Author Manager</h2>
                <form onSubmit={onSubmitHandler}>
                    <FormControl variant="outlined" style={styles.input}>
                        <InputLabel>Name</InputLabel>
                        <OutlinedInput
                            type="text"
                            variant="filled"
                            onChange={(e) => setName(e.target.value)}
                            value={name} />
                    </FormControl>
                    {allErrors ?
                        <p style={{ color: 'red' }}>{allErrors.name.message}</p> : ''
                    }
                    <Button type="submit"  variant="contained" color="primary" >Submit</Button>
                </form>
            </Paper>
        </>
    )
}

export default AuthorForm;