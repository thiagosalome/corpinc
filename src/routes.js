import React, {Component} from 'react';
import {Route, Redirect, BrowserRouter, Switch} from "react-router-dom";
import auth from "./auth";
import Home from "./pages/Home/";
import Admin from "./pages/Admin/";
import Task from "./pages/Task/";

const Routes = () => {
  auth.authenticate((response) => {
    if(response){
      console.log("Auth Routes");
      console.log(response);
    }
  })
  return(
    <BrowserRouter>
      <Switch>
        <HomeRoute exact path="/" component={Home}></HomeRoute>
        <PrivateRoute exact path="/tasks/" component={Admin}></PrivateRoute>
        <PrivateRoute path="/tasks/:id" component={Task}></PrivateRoute>
      </Switch>
    </BrowserRouter>
  )
}

const HomeRoute = ({ component: Component, ...rest }) => {
  console.log("Auth Home");
  console.log(auth.isAuthenticated);
  return(
    <Route
      {...rest}
      render={props =>
          auth.isAuthenticated ? (
          <Redirect to="/tasks" />
        ) : (
          <Component {...props} />
        )
      }
    />
  )  
}


const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log("Auth Private");
  console.log(auth.isAuthenticated);
  return(
    <Route
      {...rest}
      render={props =>
          auth.isAuthenticated ? (
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

export default Routes;