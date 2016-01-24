import React, { Component } from 'react';

import Counters from './components/Counters';

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