import React, { useState, useEffect, useRef } from 'react';
import cp1 from './img/cp.jpg';
import cp2 from './img/cp2.jpg';
import cp3 from './img/cp3.jpg';
import cp4 from './img/cp3.jpg';
import cp5 from './img/cp5.jpg';
import cp6 from './img/cp6.jpg';
import cp7 from './img/cp7.jpg';
import cp8 from './img/cp8.jpg';
import cp9 from './img/cp9.jpg';
import 'leaflet/dist/leaflet.css';
import './Nav.css'; // Create this CSS file for custom styles

const Nav = () => {
  const allCheckpoints = [
    { latitude: 23.53026002643168, longitude: 72.45812306946017, name: "Checkpoint 1", photo: cp1, direction: "Go straight till the next checkpoint." },
    { latitude: 23.529729139785935, longitude: 72.45785223917402, name: "Checkpoint 2", photo: cp2, direction: "Turn right and continue for 200 meters." },
    { latitude: 23.529539482994654, longitude: 72.457732082795, name: "Checkpoint 3", photo: cp3, direction: "Turn right and continue for 200 meters." },
    { latitude: 23.529438717423307, longitude: 72.45789891610569, name: "Checkpoint 4", photo: cp4, direction: "Turn right and continue for 200 meters." },
    { latitude: 23.52920942398443, longitude: 72.4583896122074, name: "Checkpoint 5", photo: cp5, direction: "Turn right and continue for 200 meters." },
    { latitude: 23.52872699165151, longitude: 72.45942190247463, name: "Checkpoint 6", photo: cp6, direction: "Turn right and continue for 200 meters." },
    { latitude: 23.527946232037397, longitude: 72.45904109449664, name: "Checkpoint 7", photo: cp7, direction: "Turn right and continue for 200 meters." },
    { latitude: 23.5273629312385, longitude: 72.45872293893066, name: "Checkpoint 8", photo: cp8, direction: "Turn right and continue for 200 meters." },
    { latitude: 23.529729139785935, longitude: 72.45785223917402, name: "Checkpoint 9", photo: cp9, direction: "Turn right and continue for 200 meters." },
  ];

  const [checkpoints, setCheckpoints] = useState(allCheckpoints.slice(0, 3)); // Display first three checkpoints initially
  const [userLocation, setUserLocation] = useState(null);
  const [currentCheckpointIndex, setCurrentCheckpointIndex] = useState(0);
  const [distance, setDistance] = useState(null);
  const [direction, setDirection] = useState(null);
  const navContainerRef = useRef(null);

  useEffect(() => {
    const updateUserLocation = () => {
      navigator.geolocation.getCurrentPosition(
        position => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        error => {
          console.error("Error getting user location:", error);
        }
      );
    };

    // Get initial location
    updateUserLocation();

    // Update location every 4 seconds
    const intervalId = setInterval(updateUserLocation, 4000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (checkpoints.length > 0 && userLocation) {
      const nextCheckpoint = checkpoints[currentCheckpointIndex];
      const distanceToNextCheckpoint = calculateDistance(userLocation, nextCheckpoint);
      const directionToNextCheckpoint = nextCheckpoint.direction;
      setDistance(distanceToNextCheckpoint);
      setDirection(directionToNextCheckpoint);

      // Move to the next checkpoint if close enough (within 10 meters)
      if (distanceToNextCheckpoint < 10 && currentCheckpointIndex < allCheckpoints.length - 1) {
        setCurrentCheckpointIndex(prevIndex => prevIndex + 1);
        if (currentCheckpointIndex === checkpoints.length - 1) {
          // Scroll to the next checkpoint
          navContainerRef.current.scrollTo({
            top: navContainerRef.current.scrollHeight,
            behavior: 'smooth'
          });
        }
      }
    }
  }, [userLocation, checkpoints, currentCheckpointIndex, allCheckpoints]);

  const calculateDistance = (from, to) => {
    const R = 6371000; // radius of the Earth in meters
    const dLat = toRad(to.latitude - from.latitude);
    const dLon = toRad(to.longitude - from.longitude);
    const lat1 = toRad(from.latitude);
    const lat2 = toRad(to.latitude);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance.toFixed(2);
  };

  const toRad = (value) => value * Math.PI / 180;

  return (
    <div className="nav-container" ref={navContainerRef}>
      <h1>Checkpoint Navigator</h1>
      {checkpoints.map((checkpoint, index) => (
        <div key={index} className="checkpoint-container">
          <div className={`checkpoint ${index === currentCheckpointIndex ? 'current' : ''}`}>
            <div className="checkpoint-img-container">
              <img src={checkpoint.photo} alt={checkpoint.name} className="checkpoint-photo" />
            </div>
            <div className="checkpoint-details">
              <p>{checkpoint.name}</p>
              <p>Direction to next:</p>
              <p>{direction}</p>
              {index === currentCheckpointIndex && (
                <p>{distance} meters</p>
              )}
            </div>
          </div>
          <div className="progress-bar-container">
            <div key={index} className={`progress-bar ${index < currentCheckpointIndex ? 'completed' : ''}`}>
              <div className={`circle ${index === currentCheckpointIndex ? 'active' : ''}`} />
            </div>
          </div>
        </div>
      ))}
      {direction && (
        <div className="direction">
          <p>Direction to next checkpoint:</p>
          <p>{direction}</p>
        </div>
      )}
    </div>
  );
};

export default Nav;
