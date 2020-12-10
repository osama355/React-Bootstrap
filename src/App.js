import React from 'react';
import Navigation from './component/Navigation';
import Demo from './component/Demo';
import Crousle from './component/Crousle';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Jumbotron, Button} from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation/>
        {/* <Demo/> */}
      <div className="container">
        <Jumbotron className="jumbo">
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
        <Crousle/>
      </div>
    </div>
  );
}

export default App;
