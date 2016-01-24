import React, { Component } from 'react';

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

class App extends Component {
    render() {
        let store = this.props.store;
        let state = store.getState();

        return (
            <div>
                <Counter
                    value={state.value}
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
            </div>
        );
    }
}

export default App;