import React from 'react'
import ListItem from './ListItem';
const Box = (props) => {
    const { data, header } = props;
    const boxStyle = {
        width: "250px",
        height: "360px",
        border: "2px solid black",
        overflow: "scroll",
        margin: "10px"

    }
    const taskBox = {
        border: "1px solid black",
        padding: "5px",
        margin: "10px"
    }
    const buttonStyle = {
        width: "200px"
    }
    // { taskName, status, dueDate }
    const getText = (value) => {
        return value.status === "toDo"
                ? "Start Project"
                : value.status === "doning" ? "Move to Complete" : "Remove Project"
    }

    return (
        <div style={boxStyle}>
        <h3>{header}</h3>
            {
                data.map((value, index) => {
                    return (
                        <ListItem 
                            data={value} 
                            header={value.taskName} 
                            datem={value.dueDate} 
                            key={index} 
                            listStyle={taskBox} 
                            buttonCallBack={(e) => props.callBack(e, value)} 
                            buttonStyle={buttonStyle}
                            buttonText={getText(value)}
                        />

                    )
                }
                )
            }

        </div>
    )
}

export default Box
