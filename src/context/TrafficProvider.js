import React, { Component } from 'react';
import { TrafficContext } from './TrafficContext';

class TrafficProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLight: 'green',
      pedestrianRequest: false,
      emergencyOverride: false,
      countdown: 10,
      vehicles: [
        { type: 'car', position: 0 },
        { type: 'bike', position: 100 },
        { type: 'bus', position: 200 },
        { type: 'lorry', position: 300 },
      ],
      pedestrianCrossing: false,
      ambulanceCrossing: false,
    };

    this.lightIntervals = {
      green: 10,
      yellow: 3,
      red: 7,
      pedestrianWait: 5,
    };

    this.timer = null;
  }

  componentDidMount() {
    this.startTrafficCycle();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  startTrafficCycle = () => {
    this.timer = setInterval(this.handleTrafficCycle, 1000);
  };

  handleTrafficCycle = () => {
    const { currentLight, countdown, pedestrianRequest, emergencyOverride } = this.state;

    if (emergencyOverride) {
      this.setState({ currentLight: 'red', countdown: this.lightIntervals.red });
      return;
    }

    if (countdown > 0) {
      this.setState((prevState) => ({ countdown: prevState.countdown - 1 }));
    } else {
      if (currentLight === 'green') {
        this.setState({ currentLight: 'yellow', countdown: this.lightIntervals.yellow });
        this.moveVehicles();
      } else if (currentLight === 'yellow') {
        this.setState({ currentLight: 'red', countdown: this.lightIntervals.red });
      } else {
        this.setState({ currentLight: 'green', countdown: this.lightIntervals.green });
      }
    }
  };

  moveVehicles = () => {
    this.setState((prevState) => ({
      vehicles: prevState.vehicles.map(vehicle => ({
        ...vehicle,
        position: (vehicle.position + 10) % window.innerWidth,
      })),
    }));
  };

  requestPedestrianCrossing = () => {
    this.setState({ pedestrianCrossing: true });
    setTimeout(() => this.setState({ pedestrianCrossing: false }), this.lightIntervals.pedestrianWait * 1000);
  };

  triggerEmergencyOverride = () => {
    this.setState({ emergencyOverride: true, ambulanceCrossing: true });
    setTimeout(() => {
      this.setState({ emergencyOverride: false, ambulanceCrossing: false });
    }, 10000); // Emergency mode for 10 seconds
  };

  render() {
    return (
      <TrafficContext.Provider
        value={{
          ...this.state,
          requestPedestrianCrossing: this.requestPedestrianCrossing,
          triggerEmergencyOverride: this.triggerEmergencyOverride,
        }}
      >
        {this.props.children}
      </TrafficContext.Provider>
    );
  }
}

export default TrafficProvider;