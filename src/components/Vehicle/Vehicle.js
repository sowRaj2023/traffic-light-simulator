import React, { Component } from 'react';
import './Vehicle.css';

class Vehicle extends Component {
  render() {
    const { type, position } = this.props;

    return (
      <img src={`/assets/icons/${type}.png`} alt={type} style={{ transform: `translateX(${position}px)` }} />
    );
  }
}

export default Vehicle;