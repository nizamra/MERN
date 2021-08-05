import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import Chat from './Chat';
import Main from './Main';
import Detail from './Detail';
import Update from './Update';
import Origin from './Original';

import MainAuthor from './authorFolder/Main';
import DetailAuthor from './authorFolder/Detail';
import UpdateAuthor from './authorFolder/Update';

function App() {

  // const [socket] = React.useState(() => io(':8000'));
  // React.useEffect(() => {
  //   console.log('Is this running?');
  //   socket.on('sendingDataToOthers', data => {
  //     console.log('Presenting Data');
  //     console.log(data)
  //   });

  //   return () => socket.disconnect(true);
  // }, []);

  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Detail path="product/:id" />
        <Update path="product/:id/edit" />

        <MainAuthor path="/author" />
        <DetailAuthor path="author/:id" />
        <UpdateAuthor path="author/:id/edit" />

        <Chat path="/chat" />
      </Router>

      <h3>End Main XxX</h3>
      <Origin />
    </div>
  );
}

export default App;
