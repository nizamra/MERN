import React, { useState, useEffect } from 'react';
import {Router} from '@reach/router';
import axios from 'axios';
import AllPirates from './components/Pirates';
import Create from './components/Create';
import Show from './components/Show';
import Edit from './components/Edit';
import './App.css';


function App() {

  const [pirates, setPirates] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/api/pirates')
      .then(res => {
        setPirates(res.data);
        setLoaded(true);
      });
  }, [])


  return (
    <div className="App">
      <Router>
        {loaded && <AllPirates path="/" pirates={pirates} />}
        <Create path="/pirate/new" />
        <Show path="/pirate/:id"/>
        <Edit path="/pirate/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
