import React, { useState } from 'react'
import Button from './Button'

const Input = (props) => {
    const [newTask, setNewTask] = useState("")
    const [error, setError] = useState("Your Task must be at least 6 charcter long")
    const { addNewTask } = props
    const submitHandler = (e) => {
        e.preventDefault()
        addNewTask({
            status: "toDo",
            taskName: newTask
        });
        setNewTask("");

    }

    const onChangeHandler = (e) => {
        setNewTask(e.target.value)
        if(e.target.value.length > 5 ) {
            setError("")
        }
        else {
            setError("Your Task must be at least 6 charcter long")
        }
    }
    return (
        <div>
            <form onSubmit={(e) => submitHandler(e)}>
                <input type="text" value={newTask} onChange={onChangeHandler} ></input>
                
                <Button 
                    text="Add Task"
                    isDisabled={newTask.length < 6 ? true : false}
                />
            </form>
            {error}
        </div>
    )
}

export default Input
