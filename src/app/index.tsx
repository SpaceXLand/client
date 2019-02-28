import * as React from 'react';
import { Route, Redirect, Switch, RouteComponentProps } from 'react-router-dom';
import List from './Common/List';
const Launches = React.lazy(() => import('./Launches/Launches'));
const Launch = React.lazy(() => import('./Launches/Launch'));
const Home = React.lazy(() => import('./Home/Home'));

const RedirectToHome = () => <Redirect to="/" />;

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route
      exact
      path="/launches"
      render={({ match }): RouteComponentProps | any => (
        <List {...{ match }}>
          <Launches />
        </List>
      )}
    />
    <Route exact path="/launches/:id" component={Launch} />
    <Route component={RedirectToHome} />
  </Switch>
);
