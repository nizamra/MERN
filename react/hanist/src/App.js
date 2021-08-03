import './App.css';
import { Router } from '@reach/router';
import Main from './Main';
import Detail from './Detail';
import Update from './Update';
import Origin from './Original';

import MainAuthor from './authorFolder/Main';
import DetailAuthor from './authorFolder/Detail';
import UpdateAuthor from './authorFolder/Update';

function App() {
  return (
    <div className="App">

      <Router>
        <Main path="/" />
        <Detail path="product/:id" />
        <Update path="product/:id/edit" />

        <MainAuthor path="/author" />
        <DetailAuthor path="author/:id" />
        <UpdateAuthor path="author/:id/edit" />
      </Router>

      <h3>End Main XxX</h3>
      <Origin />
    </div>
  );
}

export default App;
