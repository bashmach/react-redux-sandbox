import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountersList from './CountersList';

const mapStateToProps = (state) => {
  return {
    counters: state.counters
  };
};

export default connect(mapStateToProps, null)(CountersList);