import axios from 'axios';
import './App.css';
import { useState, useEffect } from "react";
import { navigate } from '@reach/router';
import { Router } from '@reach/router'
import Main from './Main'
import Create from './components/Input'
function App() {
  const [errors, setErrors] = useState({ taskName: "", dueDate: "" });
  const boxStyle = {
    display: "flex",
    justifyContent: "center"
  }
  const [toDoTasks, setToDoTasks] = useState([]);
  const [doingTasks, setDoingTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);
  const [loaded, setLoaded] = useState(false);


  useEffect(() => {
    axios.get('http://localhost:8000/api/product/back')
      .then(res => {
        console.log(res.data)
        setToDoTasks(res.data);
      });
  }, [])
  useEffect(() => {
    axios.get('http://localhost:8000/api/product/prog')
      .then(res => {
        setDoingTasks(res.data);
      });
  }, [])
  useEffect(() => {
    axios.get('http://localhost:8000/api/product/comp')
      .then(res => {
        setDoneTasks(res.data);
        setLoaded(true);
      });
  }, [])


  // const addNewTask = (task) => {
  //   setToDoTasks([...toDoTasks, task])
  // }
  const addNewTask = product => {
    axios.post('http://localhost:8000/api/product', product)
      .then(res => {
        setToDoTasks([...toDoTasks, res.data]);
        setErrors({ taskName: "", dueDate: "" });
        navigate('/');
      })
      .catch(err => {
        setErrors(err.response.data.errors);
      })
  }

  const startDoing = (e, product) => {
    product.status = "doning";
    axios.put('http://localhost:8000/api/product/' + product._id, product)
      .then(res => {
        setDoingTasks([...doingTasks, product]);
        const newTaskArray = toDoTasks.filter((eachTask) => {
          return eachTask._id !== product._id
        })
        setToDoTasks(newTaskArray);
      })
      .catch(err => {
        console.log(err);
      })
  }
  const finishTask = (e, product) => {
    product.status = "done";
    axios.put('http://localhost:8000/api/product/' + product._id, product)
      .then(res => {
        setDoneTasks([...doneTasks, product]);
        const newTaskArray = doingTasks.filter((eachTask) => {
          return eachTask._id !== product._id
        })
        setDoingTasks(newTaskArray);
      })
      .catch(err => {
        console.log(err);
      })
  }
  const removeTask = (e, deletedTask) => {
    axios.delete('http://localhost:8000/api/product/' + deletedTask._id)
      .then(res => {
        const newTaskArray = doneTasks.filter((eachTask) => {
          return eachTask._id !== deletedTask._id
        })
        setDoneTasks(newTaskArray);
      })
      .catch(err => {
        console.log(err);
      })
  }


  return (
    <div className="App">
      <h2>Project Manager</h2>
      <Router>
        {loaded && <Main path="/" boxStyle={boxStyle} toDoTasks={toDoTasks} doingTasks={doingTasks} doneTasks={doneTasks} startDoing={startDoing} finishTask={finishTask} removeTask={removeTask} />}
        <Create path="projects/new" addNewTask={addNewTask} initialTask="" allErrors={errors} initialDueDate="" />
        {/* <Login path="sign_in" /> */}
      </Router>

      {/* <h3>Tips for productivity</h3>
      {
        tips.map((eachTip, i) => <Tip key={i} title={eachTip.title} description={eachTip.description} ></Tip>)
      } */}

    </div>
  );
}

export default App;
