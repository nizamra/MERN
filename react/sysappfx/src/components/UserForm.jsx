import React, { useState } from 'react';

let allUsers= [""];

const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const createUser = (df) => {
        df.preventDefault();
        const newUser = { email, nom:username, password };
        console.log("allUsers", allUsers);
        allUsers.push(newUser.nom);
        console.log("Welcome", newUser);
        setUsername("");
        setEmail("");
        setPassword("");
    };

    return (
        <fieldset>
        <form onSubmit={createUser}>
            <div>
                <label>Username: </label>
                <input type="text" onChange={(xx) => setUsername(xx.target.value)} value={ username } />
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" onChange={(fd) => setEmail(fd.target.value)} value={ email } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={(ra) => setPassword(ra.target.value)} value={ password } />
            </div>
            <input type="submit" value="Create User" />
        </form>
        {allUsers.map((ss,i)=>{ return( <p key={i}>{ss}</p>)})}
        </fieldset>
    );
};

export default UserForm;