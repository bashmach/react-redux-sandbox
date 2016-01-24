import React from 'react';
import ReactDOM from 'react-dom';

import { createStore as originCreateStore, applyMiddleware, compose } from 'redux';

import App from './App';
import DevTools from './DevTools';
import reducers from './reducers';

const createStore = compose(
  DevTools.instrument()
)(originCreateStore);

const store = createStore(reducers);

const render = () => {
  ReactDOM.render(
    <div>
      <App store={store}/>
      <DevTools store={store}/>
    </div>,
    document.getElementById('root')
  );
}

store.subscribe(render);

render();