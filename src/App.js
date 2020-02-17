import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import home from "./components/home";
import Nav from "./components/Nav";
import Pink from "./components/Pink";
import Data from "./components/Data";
import Cool from "./components/Cool";

function App() {
  return (
      <div className="App">
        <Router>
          <Nav/>
          <Switch>
            <Route exact path='/' component={home}/>
            <Route exact path='/data/:id' component={Data} exact/>
            <Route exact path='/Pink/pink' component={Pink} exact/>
            <Route exact path='/Cool' component={Cool} exact/>


          </Switch>
        </Router>
      </div>
  );
}

export default App;
