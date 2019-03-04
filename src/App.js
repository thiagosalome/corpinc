import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.scss';
import Home from "./pages/Home/";
import Admin from "./pages/Admin/";
import Task from "./pages/Task/";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/tasks/" component={Admin}></Route>
          <Route path="/tasks/:id" component={Task}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
