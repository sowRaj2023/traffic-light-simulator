import React, { Component } from 'react';
import { TrafficContext } from '../../context/TrafficContext';
import './EmergencyButton.css';

class EmergencyButton extends Component {
  static contextType = TrafficContext;

  handleEmergencyOverride = () => {
    this.context.triggerEmergencyOverride();
  };

  render() {
    return (
      <button onClick={this.handleEmergencyOverride} className="emergency-btn">
        Emergency Vehicle
      </button>
    );
  }
}

export default EmergencyButton;