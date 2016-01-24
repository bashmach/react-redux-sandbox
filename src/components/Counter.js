import React, { Component } from 'react';

export default ({
  counter,
  onIncrement,
  onDecrement
}) => (
  <div>
    <h1>{counter.value}</h1>
    <button onClick={e => {
      e.preventDefault();
      onIncrement(counter.id);
    }}> INCR
    </button>
    <button onClick={e => {
      e.preventDefault();
      onDecrement(counter.id);
    }}> DECR
    </button>
  </div>
)