import React, { Component } from 'react';

const Counter = ({
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

const Counters = ({
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

class App extends Component {
  render() {
    let store = this.props.store;
    return (
      <div>
        <Counters
          {...store.getState()}

          onIncrement={(id) =>
            store.dispatch({
              type: "INCREMENT",
              id
            })
          }

          onDecrement={(id) =>
            store.dispatch({
              type: "DECREMENT",
              id
            })
          }
        />
      </div>
    );
  }
}

export default App;