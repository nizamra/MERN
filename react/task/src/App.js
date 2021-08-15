import Input from "./components/Input"
import Box from "./components/Box"
import Tip from "./components/Tip"
import './App.css';
import { useState } from "react";

function App() {
  const tips = [
    {
      title: "5 minutes rule",
      description: "set a goal of doing whatever it is you would otherwise avoid only do it for five minutes"
    },
    {
      title: "Deep work",
      description: "It's state of intense concentration for prolonged periods of time with full focus"
    },
    {
      title: "Pomodoro technique",
      description: "Set your timer for 25 minutes, and focus on a single task until the timer rings."
    }
  ]
  const boxStyle = {
    display: "flex",
    justifyContent: "center"
  }
  const [toDoTasks, setToDoTasks] = useState([]);
  const [doingTasks, setDoingTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  const addNewTask = (task) => {
    setToDoTasks([...toDoTasks, task])
  }

  const startDoing = (e, doingTask) => {
    doingTask.status = "doning";
    setDoingTasks([...doingTasks, doingTask]);
    const newTaskArray = toDoTasks.filter((eachTask) => {
      return eachTask.taskName !== doingTask.taskName
    })
    setToDoTasks(newTaskArray);
  }

  const finishTask = (e, doneTask) => {
    doneTask.status = "done";
    setDoneTasks([...doneTasks, doneTask]);
    const newTaskArray = doingTasks.filter((eachTask) => {
      return eachTask.taskName !== doneTask.taskName
    })
    setDoingTasks(newTaskArray);
  }
  const removeTask = (e, deletedTask) => {
    const newTaskArray = doneTasks.filter((eachTask) => {
      return eachTask.taskName !== deletedTask.taskName
    })
    setDoneTasks(newTaskArray);
  }




  return (
    <div className="App">
      <h2>Manage Your Day</h2>
      <Input addNewTask={addNewTask} />
      <div style={boxStyle}>
        <Box data={toDoTasks} callBack={startDoing} />
        <Box data={doingTasks} callBack={finishTask} />
        <Box data={doneTasks} callBack={removeTask} />
      </div>
      <h3>Tips for productivity</h3>
      {
        tips.map((eachTip, i) => <Tip key={i} title={eachTip.title} description={eachTip.description} ></Tip>)
      }

    </div>
  );
}

export default App;
