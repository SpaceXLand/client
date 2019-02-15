import * as React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
const Launches = React.lazy(() => import('./Launches/Launches'));
const Launch = React.lazy(() => import('./Launches/Launch'));
const Home = React.lazy(() => import('./Home/Home'));

const RedirectToHome = () => <Redirect to="/" />;

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/launches" component={Launches} />
    <Route exact path="/launches/:id" component={Launch} />
    <Route component={RedirectToHome} />
  </Switch>
);
