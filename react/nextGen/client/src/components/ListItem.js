import React from 'react'
import Button from './Button';

const ListItem = (props) => {
    const {data, listStyle, buttonStyle, header, datem, buttonCallBack, buttonText} = props
    return (
        <div style={listStyle}>

        <h5>{header}</h5>
        <h6>Due: {datem}</h6>
        <Button 
            onclickHandler={(e) => buttonCallBack(e, data)} 
            text={buttonText} 
            isDisabled={false}
            buttonStyle={buttonStyle} 
        />
        </div>
    )
}

export default ListItem
