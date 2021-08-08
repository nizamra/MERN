import React from 'react'

const Button = (props) => {
    return (
        <button
            disabled={props.isDisabled}
            onClick={props.onclickHandler}
            style={props.buttonStyle}
            >
                {props.text}
            </button>
    )
}

export default Button
