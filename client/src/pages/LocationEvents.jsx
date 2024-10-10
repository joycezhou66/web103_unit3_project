import React, { useState, useEffect } from 'react';
import { getEventsByLocation } from '../services/EventsAPI'; // Importing from EventsAPI service
import { getLocationById } from '../services/LocationsAPI'; // Importing from LocationsAPI service
import Event from '../components/Event';
import '../css/LocationEvents.css';

const LocationEvents = ({ match }) => {
    const locationId = match.params.locationId; // Access the location ID from the URL parameters
    const [location, setLocation] = useState({});
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchLocationAndEvents = async () => {
            try {
                // Fetch location details
                const locationData = await getLocationById(locationId);
                setLocation(locationData);

                // Fetch events for the specific location
                const eventsData = await getEventsByLocation(locationId);
                setEvents(eventsData);
            } catch (error) {
                console.error('Error fetching location or events:', error);
            }
        };

        fetchLocationAndEvents();
    }, [locationId]);

    return (
        <div className='location-events'>
            <header>
                <div className='location-image'>
                    <img src={location.image} alt={`${location.name} image`} />
                </div>

                <div className='location-info'>
                    <h2>{location.name}</h2>
                    <p>{location.address}, {location.city}, {location.state} {location.zip}</p>
                </div>
            </header>

            <main>
                {events && events.length > 0 ? (
                    events.map((event) => (
                        <Event
                            key={event.id}
                            id={event.id}
                            title={event.title}
                            date={event.event_date}
                            time={event.time}
                            image={event.image}
                        />
                    ))
                ) : (
                    <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled at this location yet!'}</h2>
                )}
            </main>
        </div>
    );
};

export default LocationEvents;
