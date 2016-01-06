import React from 'react';
import { createStore as originCreateStore, applyMiddleware, compose } from 'redux';

import { createDevTools } from 'redux-devtools';
import { persistState } from 'redux-devtools';

import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

import ReactDOM from 'react-dom';

// createDevTools takes a monitor and produces a DevTools component
const DevTools = createDevTools(
  // Monitors are individually adjustable with props.
  // Consult their repositories to learn about those props.
  // Here, we put LogMonitor inside a DockMonitor.
  <DockMonitor toggleVisibilityKey='alt-w'
               changePositionKey='ctrl-q'>
    <LogMonitor theme='tomorrow' />
  </DockMonitor>
);

let createStore = compose(
  DevTools.instrument()
)(originCreateStore);

const Counter = ({
  value,
  onIncrement,
  onDecrement
}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
)

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
       return state + 1;

    case 'DECREMENT':
      return state - 1;

    default:
      return state;
  }
}

const store = createStore(counter);

const render = () => {
  ReactDOM.render(
    <div>
      <Counter
        value={store.getState()}
        onIncrement={() =>
          store.dispatch({
            type: "INCREMENT"
          })
        }
        onDecrement={() =>
          store.dispatch({
            type: "DECREMENT"
          })
        }
      />
      <DevTools store={store}/>
    </div>,
    document.getElementById('root'));
}

store.subscribe(render);

render();
