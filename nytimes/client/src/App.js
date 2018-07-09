import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "React-router-dom";
import Jumbotron from "./"
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import './App.css';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/saved/:id" component={Saved} />
      </Switch>
    </div>
    </Router>

);

export default App;
