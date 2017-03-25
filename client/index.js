import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import preziApp from './reducers';
import App from './App';
import { fetchPrezises } from './actions';
require('./main.css');


let store = createStore(preziApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.root')
);

store.dispatch(fetchPrezises(store.dispatch));
