import React, { useState } from 'react'
import Button from './Button'

const Input = (props) => {
    const { initialTask, allErrors, initialDueDate, addNewTask } = props;
    const [taskName, setTask] = useState(initialTask);
    const [status, setStatus] = useState("backlog");
    const [dueDate, setDueDate] = useState(initialDueDate);
    const [nameError, setNameError] = useState("Your Task must be at least 3 charcter long");

    const onSubmitHandler = e => {
        e.preventDefault();
        addNewTask({ taskName, status, dueDate });
        setTask("");
        setDueDate("");
    }
    // const [newTask, setNewTask] = useState("")
    


    const validatingName = (e) => {
        setTask(e.target.value)
        if(e.target.value.length > 2 ) {
            setNameError("")
            // setallErrors.taskName.message("")
        }
        else {
            setNameError("Your Task must be at least 3 charcter long")
        }
    }
    return (
        <div>
        <form onSubmit={onSubmitHandler}>
            <h2>Product Manager</h2>
                <p>
                    <label>Project:  </label>
                    <input
                        type="text"
                        onChange={validatingName}
                        // onChange={(e) => setTask(e.target.value)}
                        value={taskName} /><br />
                        {nameError}
                    {allErrors.taskName ?
                        <p style={{ color: 'red' }}>{allErrors.taskName.message}</p> : ''
                    }
                </p>
                <p>
                    <input
                        type="hidden"
                        onChange={(e) => setStatus(e.target.value)}
                        value="backlog" />
                </p>
                <p>
                    <label>DueDate </label>
                    <input
                        type="date"
                        onChange={(e) => setDueDate(e.target.value)}
                        value={dueDate} />
                    {allErrors.dueDate ?
                        <p style={{ color: 'red' }}>{allErrors.dueDate.message}</p> : ''
                    }
                </p>
                <Button 
                    text="Plan project"
                    isDisabled={taskName.length < 6 ? true : false}
                />
            </form>
        </div>
    )
}

export default Input
