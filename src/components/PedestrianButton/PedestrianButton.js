import React, { Component } from 'react';
import { TrafficContext } from '../../context/TrafficContext';
import './PedestrianButton.css';

class PedestrianButton extends Component {
  static contextType = TrafficContext;

  handlePedestrianRequest = () => {
    this.context.requestPedestrianCrossing();
  };

  render() {
    return (
      <button onClick={this.handlePedestrianRequest} className="pedestrian-btn">
        Pedestrian Crossing
      </button>
    );
  }
}

export default PedestrianButton;