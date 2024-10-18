import React, { useState, useEffect } from 'react';

const LocationEvents = ({ index }) => {
  const [location, setLocation] = useState({});
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch location data from your backend API running on port 3000
    fetch(`http://localhost:3000/api/locations/${index}`)
      .then((response) => response.json())
      .then((data) => setLocation(data))
      .catch((error) => console.error('Error fetching location data:', error));

    // Fetch events data from your backend API running on port 3000
    fetch(`http://localhost:3000/api/events/${index}`)
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error fetching events data:', error));
  }, [index]);

  return (
    <div className='location-events'>
      <header>
        <div className='location-image'>
          <img src={location.image} alt={location.name} />
        </div>
        <div className='location-info'>
          <h2>{location.name}</h2>
          <p>{location.address}, {location.city}, {location.state} {location.zip}</p>
        </div>
      </header>
      <main>
        {events.length > 0 ? (
          events.map((event) => (
            <div key={event.id}>
              <h3>{event.title}</h3>
              <p>{event.date}</p>
            </div>
          ))
        ) : (
          <h2>No events scheduled at this location yet!</h2>
        )}
      </main>
    </div>
  );
};

export default LocationEvents;

