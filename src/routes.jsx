import React from 'react';
import {
  Route, Redirect, BrowserRouter, Switch,
} from 'react-router-dom';
import PropTypes from 'prop-types';

// Pages
import Home from './pages/Home';
import Admin from './pages/Admin';
import Task from './pages/Task';
import NotFound from './pages/404';

// Services
import { isAuthenticated } from './services/auth';

const Routes = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <HomeRoute exact path="/" component={Home} />
      <PrivateRoute exact path="/tasks" component={Admin} />
      <PrivateRoute path="/tasks/:id" component={Task} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (isAuthenticated() ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/',
        }}
      />
    ))}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired
};

const HomeRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (isAuthenticated() ? (
      <Redirect to="/tasks" />
    ) : (
      <Component {...props} />
    ))}
  />
);

HomeRoute.propTypes = {
  component: PropTypes.func.isRequired,
};

export default Routes;
