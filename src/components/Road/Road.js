import React, { Component } from 'react';
import Vehicle from './Vehicle';
import { TrafficContext } from '../../context/TrafficContext';
import './Road.css';

class Road extends Component {
  static contextType = TrafficContext;

  state = {
    vehiclePositions: this.context.vehicles.map(vehicle => vehicle.position),
  };

  componentDidMount() {
    this.moveVehicles();
  }

  moveVehicles = () => {
    setInterval(() => {
      if (this.context.currentLight === 'green') {
        this.setState(prevState => ({
          vehiclePositions: prevState.vehiclePositions.map(pos => pos + 5),
        }));
      }
    }, 1000);
  };

  render() {
    const { vehicles } = this.context;
    const { vehiclePositions } = this.state;

    return (
      <div className="road">
        {vehicles.map((vehicle, index) => (
          <Vehicle key={index} type={vehicle.type} position={vehiclePositions[index]} />
        ))}
      </div>
    );
  }
}

export default Road;