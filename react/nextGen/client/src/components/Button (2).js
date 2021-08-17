import React from 'react'

const Button = (props) => {
    const buttonStyle = {
        width: "200px"
    }

    return (
        <button
            onClick={props.onclickHandler}
            style={buttonStyle}
            >
                Delete
            </button>
    )
}

export default Button
