import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import './App.scss';
import Home from "./pages/Home/";
import Admin from "./pages/Admin/";
import Task from "./pages/Task/";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <HomeRoute exact path="/" component={Home}></HomeRoute>
          <PrivateRoute exact path="/tasks/" component={Admin}></PrivateRoute>
          <PrivateRoute path="/tasks/:id" component={Task}></PrivateRoute>
        </Switch>
      </BrowserRouter>
    );
  }
}

const HomeRoute = ({ component: Component, ...rest }) => {
  return(
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("authToken") ? (
          <Redirect to="/tasks" />
        ) : (
          <Component {...props} />
        )
      }
    />
  )  
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  return(
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("authToken") ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )  
}

export default App;
