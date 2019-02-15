import * as React from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import Launches from './Launches/Launches';
import Launch from './Launches/Launch';
import Home from './Home/Home';
import history from '../utils/history';

const RedirectToHome = () => <Redirect to="/" />;

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/launches" component={Launches} />
    <Route exact path="/launches/:id" component={Launch} />
    <Route component={RedirectToHome} />
  </Switch>
);
