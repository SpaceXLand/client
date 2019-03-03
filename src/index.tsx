import * as React from 'react';
import { Suspense } from 'react';
import { ApolloProvider } from 'react-apollo-hooks';
import * as ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import App from './app';
import { ThemeProvider } from 'styled-components';
import registerServiceWorker from './utils/registerServiceWorker';
import { theme } from './styles';
import { GlobalStyle } from './styles/global';
import Navbar from './app/Common/Navbar';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import history from './utils/history';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql'
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <Router history={history}>
        <React.Fragment>
          <GlobalStyle />
          <Navbar history={history} />
          <Suspense fallback={null}>
            <App />
          </Suspense>
        </React.Fragment>
      </Router>
    </ApolloProvider>
  </ThemeProvider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
