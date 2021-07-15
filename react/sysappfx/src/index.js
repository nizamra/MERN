import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NizForm from './components/someForm'
import PersonCard from './components/PersonCard'
import LightSwitch from './components/LightSwitch'
import MoshMosh from './components/mosh'
import Counter from './components/counter'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <LightSwitch />
    <MoshMosh />
    <Counter />
    <NizForm textprop={"give back"} />
    <PersonCard firstName="sam" lastName="amanda" age={13} hairColor="yellow" />
    <PersonCard firstName="Ahmad" lastName="Rjoob" age={43} hairColor="Black" />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
