import React from 'react'
import Button from './Button';
import moment from 'moment'

var now = moment().format('L');

const ListItem = (props) => {
    const {data, listStyle, buttonStyle, header, datem, buttonCallBack, buttonText} = props
    const potato=moment(datem).format('L');
    const hStyle = { color: 'red' };
    return (
        <div style={listStyle}>

        <h5>{header}</h5>

        {now < potato ? 
        <h6>Due: {potato}</h6> : 
        <h6 style={ hStyle }>Due: {potato}</h6>}
        
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
