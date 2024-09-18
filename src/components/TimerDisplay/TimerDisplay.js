import React, { Component } from 'react';
import { TrafficContext } from '../../context/TrafficContext';
import './TimerDisplay.css';

class TimerDisplay extends Component {
  static contextType = TrafficContext;

  render() {
    const { countdown } = this.context;

    return <div className="timer-display">Time left: {countdown}s</div>;
  }
}

export default TimerDisplay;