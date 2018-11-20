import React from 'react';
import ReactDOM from 'react-dom';
import AppolliClient, { ApolloClient } from 'apollo-client';
import { AppolloProvider, ApolloProvider } from 'react-apollo';
import SongList from './components/SongList';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './components/App';
import SongCreate from './components/SongCreate';

const client = new ApolloClient({});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList}></IndexRoute>
          <Route path="songs/new" component={SongCreate}></Route>
        </Route>
      </Router>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
