import React from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="App">
      <h1>Hello Dojo</h1>
        <p>Things need to be done</p>
        <ul>
          <li>Learn React</li>
          <li>Climb Mt.Everest</li>
          <li>Run a marathon</li>
          <li>Feed the dogs</li>
        </ul>
            <form action="/process" method="post">                
                <div class="form-group">                    
                    <label htmlFor="email">Email:</label>                    
                    <input type="text" id="email" name="username" class="form-control" />                
                </div>            
            </form>
      {/* <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" /> 
        <img src="https://cdn.hackernoon.com/images/1*KBGdMaU_emZX4XR1AvkD4A.gif" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
