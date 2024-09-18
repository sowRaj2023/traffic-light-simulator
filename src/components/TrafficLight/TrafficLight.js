import React, { useContext } from 'react';
import { TrafficContext } from '../../context/TrafficContext';
import './TrafficLight.css';

const TrafficLight = () => {
  const {
    currentLight,
    vehicles,
    requestPedestrianCrossing,
    pedestrianCrossing,
    triggerEmergencyOverride,
    ambulanceCrossing,
  } = useContext(TrafficContext);

  return (
    <div className="traffic-light-container">
      <div className="traffic-light">
        <div className={`light red ${currentLight === 'red' ? 'active' : ''}`}></div>
        <div className={`light yellow ${currentLight === 'yellow' ? 'active' : ''}`}></div>
        <div className={`light green ${currentLight === 'green' ? 'active' : ''}`}></div>
      </div>

      <div className="road">
        {vehicles.map((vehicle, index) => (
          <div
            key={index}
            className={`vehicle ${vehicle.type}`}
            style={{ transform: `translateX(${vehicle.position}px)` }}
          >
            <img src={`/assets/icons/${vehicle.type}.png`} alt={vehicle.type} />
          </div>
        ))}
        {ambulanceCrossing && <div className="vehicle ambulance"></div>}
      </div>

      {pedestrianCrossing && <div className="pedestrian"></div>}

      <button className="pedestrian-button" onClick={requestPedestrianCrossing}>
        Pedestrian Crossing
      </button>

      <button className="emergency-button" onClick={triggerEmergencyOverride}>
        Emergency
      </button>
    </div>
  );
};

export default TrafficLight;