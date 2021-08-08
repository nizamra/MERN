import './App.css'
import React from 'react'
import { Router } from '@reach/router'

import Main from './productFolder/Main'
import Detail from './productFolder/Detail'
import Update from './productFolder/Update'

function App() {

  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Detail path="product/:id" />
        <Update path="product/:id/edit" />
      </Router>

      <h3>--XxX End - Page XxX--</h3>
    </div>
  );
}

export default App;