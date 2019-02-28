import * as React from 'react';
import { Route, Redirect, Switch, RouteComponentProps } from 'react-router-dom';
import List from './Common/List';
const Home = React.lazy(() => import('./Home/Home'));
const Launches = React.lazy(() => import('./Launches/Launches'));
const Launch = React.lazy(() => import('./Launches/Launch'));
const Rockets = React.lazy(() => import('./Rockets/Rockets'));
const Rocket = React.lazy(() => import('./Rockets/Rocket'));
const Missions = React.lazy(() => import('./Missions/Missions'));
const Mission = React.lazy(() => import('./Missions/Mission'));
const Ships = React.lazy(() => import('./Ships/Ships'));
const Ship = React.lazy(() => import('./Ships/Ship'));

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
    <Route
      exact
      path="/rockets"
      render={({ match }): RouteComponentProps | any => (
        <List {...{ match }} noSearch>
          <Rockets />
        </List>
      )}
    />
    <Route exact path="/rockets/:id" component={Rocket} />
    <Route
      exact
      path="/missions"
      render={({ match }): RouteComponentProps | any => (
        <List {...{ match }}>
          <Missions />
        </List>
      )}
    />
    <Route exact path="/missions/:id" component={Mission} />
    <Route
      exact
      path="/ships"
      render={({ match }): RouteComponentProps | any => (
        <List {...{ match }}>
          <Ships />
        </List>
      )}
    />
    <Route exact path="/ships/:id" component={Ship} />
    <Route component={RedirectToHome} />
  </Switch>
);
