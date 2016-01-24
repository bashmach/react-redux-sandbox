import React, { Component } from 'react';
import { connect } from 'react-redux';
import Counter from './Counter';

export default ({counters}) => {
  return (
    <div>
      <h2>Counters:</h2>
      {counters.map(counter =>
        <Counter
          key={counter.id}
          {...counter}
        />
      )}
    </div>
  )
};