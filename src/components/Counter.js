import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment(e) {
    e.preventDefault();

    const {id, dispatch} = this.props;

    dispatch({
      type: 'INCREMENT_STARTED',
      id
    });

    setTimeout(function () {
      dispatch({
        type: 'INCREMENT',
        id
      }).bind(this);
    }, 2e3);
  }

  decrement(e) {
    e.preventDefault();

    const {id, dispatch} = this.props;

    dispatch({
      type: 'DECREMENT_STARTED',
      id
    });

    setTimeout(function () {
      dispatch({
        type: 'DECREMENT',
        id
      }).bind(this);
    }, 2e3);
  }

  render() {
    const {value, isWaiting} = this.props;

    return (
      <div>
        <h1>{value}{isWaiting && <span>...</span>}</h1>
        <button disabled={isWaiting} onClick={this.increment}> INCR </button>
        <button disabled={isWaiting} onClick={this.decrement}> DECR </button>
      </div>
    );
  }
}

Counter.propTypes = {
  id: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  isWaiting: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default connect()(Counter);