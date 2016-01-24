import React from 'react';
import ReactDOM from 'react-dom';
import { createStore as originCreateStore, applyMiddleware, compose } from 'redux';

import App from './App';

import { createDevTools } from 'redux-devtools';
import { persistState } from 'redux-devtools';

import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

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

const counter = (state = {value: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                value: state.value + 1
            };

        case 'DECREMENT':
            return {
                ...state,
                value: state.value - 1
            };

        default:
            return state;
    }
}

const store = createStore(counter);

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