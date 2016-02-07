import React from 'react';
import ReactDOM from 'react-dom';
import { Map } from 'immutable';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import Actions from './actions';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import routes from './routes';

const store = createStore(reducer);
store.dispatch({
  type: Actions.ADD_BLOG,
  blog: {
    id: 'uuid1',
    title: 'Blog Title 1',
    content: 'Blog Content 1'
  }
});

const application = (
  <Provider store={store} history={createBrowserHistory()}>
    <Router>{routes}</Router>
  </Provider>
);

ReactDOM.render(application, document.getElementById('app'));
