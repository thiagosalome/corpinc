import React from 'react';
import {Route, Redirect, BrowserRouter, Switch} from "react-router-dom";
import {isAuthenticated} from "./services/auth";
import Home from "./pages/Home/";
import Admin from "./pages/Admin/";
import Task from "./pages/Task/";
import NotFound from "./pages/404/"

const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <HomeRoute exact path="/" component={Home}></HomeRoute>
        <PrivateRoute exact path="/tasks" component={Admin}></PrivateRoute>
        <PrivateRoute path="/tasks/:id" component={Task}></PrivateRoute>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  )
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  return(
    <Route
      {...rest}
      render={props =>
          isAuthenticated() ? (
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

const HomeRoute = ({ component: Component, ...rest }) => {
  return(
    <Route
      {...rest}
      render={props =>
          isAuthenticated() ? (
          <Redirect to="/tasks" />
        ) : (
          <Component {...props} />
        )
      }
    />
  )  
}


export default Routes;