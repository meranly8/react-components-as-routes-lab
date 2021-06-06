import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';


const App = () => {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/actors"><Actors /></Route>
          <Route exact path="/directors"><Directors /></Route>
          <Route exact path="/movies"><Movies /></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App
