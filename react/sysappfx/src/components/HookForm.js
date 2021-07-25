import React from 'react'
// First Name, Last Name, Email, Password and Confirm Password


const HookForm = () => {
    const [FirstName, setFirstName] = React.useState("");
    const [LastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [ConfirmPassword, setConfirmPassword] = React.useState("");

    const fastPrint = (df) => {
        df.preventDefault();
        const newUser = { FirstName, LastName, email, password };
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
    };

    return (
        <fieldset>
            <h3>Realtime Form</h3>
            <form onSubmit={fastPrint}>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={(xx) => setFirstName(xx.target.value)} value={FirstName} />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={(xx) => setLastName(xx.target.value)} value={LastName} />
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={(fd) => setEmail(fd.target.value)} value={email} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={(ra) => setPassword(ra.target.value)} value={password} />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={(ra) => setConfirmPassword(ra.target.value)} value={ConfirmPassword} />
                </div>
                <input type="submit" value="Create User" />
            </form>
            <h3>Realtime Data</h3>
            <p>First Name: {FirstName}</p>
            <p>Last Name: {LastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
        </fieldset>
    )
}

export default HookForm
