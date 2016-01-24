import React, { Component } from 'react';
import Counter from './Counter';

export default ({
  counters,
  onIncrement,
  onDecrement
}) => (
  <div>
    <h2>Counters:</h2>
    {counters.map(counter =>
      <Counter
        key={counter.id}
        counter={counter}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    )}
  </div>
)