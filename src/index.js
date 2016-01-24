import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createStore as originCreateStore, applyMiddleware, compose } from 'redux';

import App from './components/App';
import DevTools from './DevTools';
import reducers from './reducers';

const createStore = compose(
  DevTools.instrument()
)(originCreateStore);

const store = createStore(reducers);

ReactDOM.render(
  <div>
    <Provider store={store}>
      <App />
    </Provider>
    <DevTools store={store} />
  </div>,
  document.getElementById('root')
);