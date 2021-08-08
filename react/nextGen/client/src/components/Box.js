import React from 'react'
import ListItem from './ListItem';
const Box = (props) => {
    const { data } = props;
    const boxStyle = {
        width: "300px",
        height: "300px",
        border: "2px solid black",
        margin: "10px"

    }
    const taskBox = {
        border: "1px solid black",
        padding: "5px",
        margin: "10px"
    }
    const buttonStyle = {
        width: "250px"
    }

    const getText = (value) => {
        return value.status === "toDo"
                ? "Start Doing"
                : value.status === "doning" ? "Done with This Task" : "Remove Task"
    }

    return (
        <div style={boxStyle}>
            {
                data.map((value, index) => {
                    return (
                        <ListItem 
                            data={value} 
                            header={value.taskName} 
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
