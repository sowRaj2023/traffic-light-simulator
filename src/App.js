import React from 'react';
import TrafficProvider from './context/TrafficProvider'; // Adjust path if necessary
import TrafficLight from './components/TrafficLight/TrafficLight';
import EmergencyButton from './components/EmergencyButton/EmergencyButton';
import PedestrianButton from './components/PedestrianButton/PedestrianButton';
import TimerDisplay from './components/TimerDisplay/TimerDisplay';
import './App.css'; // Optional: Include any global styles here

function App() {
  return (
    <TrafficProvider>
      <div className="app">
        <TimerDisplay />
        <TrafficLight />
        <div className="button-container">
          <PedestrianButton />
          <EmergencyButton />
        </div>
      </div>
    </TrafficProvider>
  );
}

export default App;
