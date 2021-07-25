import React from 'react'

const MoreForms = () => {
    const [FirstName, setFirstName] = React.useState("");
    const [LastName, setLastName] = React.useState("");
    const [LastNameError, setLastNameError] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [emailEr, setEmailEr] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [passwordErr, setPasswordErr] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [confirmPasswordErr, setConfirmPasswordErr] = React.useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = React.useState(false);
    const [nameError, setNameError] = React.useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { FirstName, LastName, email, password };
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);

    };

    const formMessage = () => {
        if (hasBeenSubmitted) {
            return "Thank you for submitting the form!";
        } else {
            return <h3>Welcome, please submit the form</h3>;
        }
    };

    const potato = (xx) => {
        setFirstName(xx.target.value);
        setNameError(xx.target.value);
        if (xx.target.value.length < 1) {
            setNameError("Name is required!");
        } else if (xx.target.value.length < 2) {
            setNameError("Name must be 2 characters or longer!");
        }
        setHasBeenSubmitted(false);
    }
    const lastPotato = (xx) => {
        setLastName(xx.target.value);
        setLastNameError(xx.target.value);
        if (xx.target.value.length < 1) {
            setLastNameError("Name is required!");
        } else if (xx.target.value.length < 2) {
            setLastNameError("Name must be 2 characters or longer!");
        }
    }
    const potatoMail = (xx) => {
        setEmail(xx.target.value);
        setEmailEr(xx.target.value);
        if (xx.target.value.length < 5) {
            setEmailEr("this field must be at least 5 characters!");
        }
    }
    const passin = (xx) => {
        setPassword(xx.target.value);
        setPasswordErr(xx.target.value);
        if (xx.target.value.length < 8) {
            setPasswordErr("this field must be at least 8 characters!");
        }
    }
    const mishmish = (xx) => {
        setConfirmPassword(xx.target.value);
        setConfirmPasswordErr(xx.target.value);
        if (xx.target.value !== password) {
            setConfirmPasswordErr("Passwords MUST match!");
        }
    }

    // The passwords must match and be at least 8 characters.

    return (
        <fieldset>
            <h3>Second Form</h3>
            {formMessage()}
            <form onSubmit={createUser}>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={potato} value={FirstName} />
                    {nameError ? <p style={{ color: 'red' }}>{nameError}</p> : ''}
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={lastPotato} value={LastName} />
                    {LastNameError ? <p style={{ color: 'red' }}>{LastNameError}</p> : ''}
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={potatoMail} value={email} />
                    {emailEr ? <p style={{ color: 'red' }}>{emailEr}</p> : ''}
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={passin} value={password} />
                    {passwordErr ? <p style={{ color: 'red' }}>{passwordErr}</p> : ''}
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={mishmish} value={confirmPassword} />
                    {confirmPasswordErr ? <p style={{ color: 'red' }}>{confirmPasswordErr}</p> : ''}
                </div>
                <input type="submit" value="Create User" />
            </form>
        </fieldset>
    )
}

export default MoreForms
