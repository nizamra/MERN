import React, { useState } from 'react'

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
            <h2>Author Manager</h2>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Name</label><br />
                    <input
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name} />
                    {/* {allErrors ? <p style={{ color: 'red' }}>{allErrors.name.message}</p> : ''} */}
                    {/* {<p style={{ color: 'red' }}>{allErrors.name.message}</p>} */}
                </p>
                <input type="submit" />
            </form>
        </>
    )
}

export default AuthorForm;