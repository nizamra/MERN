import React from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import MyNewComponent from './components/comWithChild';
import MessageForm from './components/MessageForm';
import MessageDisplay from './components/DisplayMessages'
import BoxForm from './components/BoxForm';
import BoxDisplay from './components/DisplayBox'
import TheRedAlert from './components/RedAlert'
import Tabss from './components/TabsatForYou'


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
        < Tabss howManyDoYouWant={6} />
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
