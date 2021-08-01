import './App.css';
import { Router } from '@reach/router';
import Main from './Main';
import Detail from './Detail';
import Update from './Update';
import Origin from './Original';

function App() {
  return (
    <div className="App">
    
      <Router>
        <Main path="/" />
        <Detail path="product/:id" />
        <Update path="product/:id/edit"/>
      </Router>

      <h3>End Main XxX</h3>
      <Origin />
    </div>
  );
}

export default App;
