import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import stockInApp from './reducers'
import App from './components/App';
import goods from './goods'

let store = createStore(stockInApp,goods)


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);