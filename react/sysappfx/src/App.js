import React from 'react';
import { Router } from '@reach/router';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import MyNewComponent from './components/comWithChild';
import MessageForm from './components/MessageForm';
import MessageDisplay from './components/DisplayMessages';
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/DisplayBox';
import TheRedAlert from './components/RedAlert';
import Abbas from './components/TabsatForYou';
import Ragad from './components/AboutPromises';
import Abbas3la from './components/FetchingAPIpokemons';
import Wadeeee3 from './components/FetchingAPIpokemonsWithHamarsheh';
import MohRaddad from './components/AxiosApiPokimons';
import HaneenS from './components/NavBar';
import DetailComponent from './components/DetailComponent';
import HomerSipson from './components/HomerSipson';
import IdealForOmar from './components/IdealForOmar';
import HelloAdele from './components/HelloAdele';
import CollersOfRainbow from './components/CollersOfRainbow';
import AmalHayati from './components/LukeFalafelSpace';


function App() {
  const [currentMsg, setCurrentMsg] = React.useState([]);
  const youveGotMail = (newMessage) => {
    setCurrentMsg([...currentMsg, newMessage]);
  }
  const [color, setColor] = React.useState([]);
  const newBoxMade = (newColor) => {
    setColor([...color, newColor]);
  }
  return (
    <div className="App">
      <Router>
        <DetailComponent path="/extreme/:id" />
        <HomerSipson path="/home" />
        <IdealForOmar path="/:id" />
        <HelloAdele path="/hello" />
        <CollersOfRainbow path="/hello/:color/:coller" />
        {/* <DashboardComponent path="/dashboard" /> */}
      </Router>
      <fieldset>
        <AmalHayati />
      </fieldset>
      <fieldset>
        <HaneenS />
      </fieldset>
      <fieldset>
        <MessageForm onNewMessage={youveGotMail} />
        <MessageDisplay message={currentMsg} />
      </fieldset>
      <fieldset>
        <BoxForm onNewColorInput={newBoxMade} />
        <BoxDisplay everybox={color} />
      </fieldset>
      <fieldset>
        < TheRedAlert generals={["Muses", "Hani", "Omar", "Jouri"]} />
      </fieldset>
      <fieldset>
        < Abbas howManyDoYouWant={6} />
      </fieldset>
      <fieldset>
        < Ragad />
      </fieldset>
      <fieldset>
        < Abbas3la />
      </fieldset>
      <fieldset>
        < Wadeeee3 />
      </fieldset>
      <fieldset>
        < MohRaddad />
      </fieldset>

      <h1>Hello Dojo</h1>
      <p>Things need to be done</p>
      <MyNewComponent header={"Header Prop"}>
        <p>This is a child</p>
        <p>This is another child</p>
        <p>This is even another child</p>
      </MyNewComponent>
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
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
