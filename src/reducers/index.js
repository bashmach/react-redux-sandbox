import { combineReducers } from 'redux';

const defaultState = [{id: 1, value: 0}, {id: 2, value: 0}];

const counter = (state = {}, action) => {
  if (state.id !== action.id) {
    return state;
  }

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

const counters = (state = defaultState, action) => {
  switch (action.type) {
    case 'INCREMENT':
    case 'DECREMENT':
      return state.map(c => {
        return counter(c, action)
      });

    default:
      return state;
  }
}

export default combineReducers({counters});

