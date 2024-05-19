import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './nav';

// Define default checkpoints
const defaultCheckpoints = [
  { latitude: 37.7749, longitude: -122.4194 }, // Example checkpoint 1
  { latitude: 34.0522, longitude: -118.2437 }, // Example checkpoint 2
  { latitude: 40.7128, longitude: -74.0060 }   // Example checkpoint 3
];

ReactDOM.render(
  <React.StrictMode>
    <Nav defaultCheckpoints={defaultCheckpoints} />
  </React.StrictMode>,
  document.getElementById('root')
);
