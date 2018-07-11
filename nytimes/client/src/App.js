import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Article from "./pages/Articles";
import Home from "./components/Home";
import Saved from "./components/Saved";
import NoMatch from "./pages/NoMatch";
import Jumbotron from "./components/Jumbotron";
import ReactDom from 'react-dom';


const App = () => (
  <Router>
    <div>
      <Article/>
      <Switch>
        <Route  exact path="/" component={Home} />
        <Route exact path="/saved" component={Saved}/>
      </Switch>
        </div>
      </Router>       
);

export default App;
