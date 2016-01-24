import React, { Component } from 'react';
import { connect } from 'react-redux';

let Counter = ({id, value, dispatch}) => {
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={e => {
        e.preventDefault();
        dispatch({
          type: 'INCREMENT',
          id
        });
      }}> INCR
      </button>
      <button onClick={e => {
        e.preventDefault();
        dispatch({
          type: 'DECREMENT',
          id
        });
      }}> DECR
      </button>
    </div>
  );
};

export default connect()(Counter);