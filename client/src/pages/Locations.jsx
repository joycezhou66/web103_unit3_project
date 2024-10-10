import React, { useState, useEffect } from 'react';
import { getAllLocations } from '../services/LocationsAPI'; // Importing from LocationsAPI service
import unitygrid from '../assets/unitygrid.jpg';
import '../css/Locations.css';

const Locations = () => {
    const [locations, setLocations] = useState([]);
    const [venueNames, setVenueNames] = useState({ venue1: '', venue2: '', venue3: '', venue4: '' });

    useEffect(() => {
        const fetchLocations = async () => {
            try {
                const locationsData = await getAllLocations();
                setLocations(locationsData);
                setVenueNames({
                    venue1: locationsData[0]?.name || '',
                    venue2: locationsData[1]?.name || '',
                    venue3: locationsData[2]?.name || '',
                    venue4: locationsData[3]?.name || ''
                });
                setListeners();
            } catch (error) {
                console.error('Error fetching locations:', error);
            }
        };

        fetchLocations();
    }, []);

    const setListeners = () => {
        const polygons = document.querySelectorAll('polygon');

        polygons.forEach(element => {
            element.addEventListener('mouseover', (event) => {
                const buttonElement = document.getElementById(`${event.target.id}button`);
                buttonElement.style.opacity = 1;
            });

            element.addEventListener('mouseleave', (event) => {
                const buttonElement = document.getElementById(`${event.target.id}button`);
                buttonElement.style.opacity = 0;
            });
        });
    };

    return (
        <div className='available-locations'>
            <div id='venue1button' className='venue1-button-overlay'>
                <a href={`/location/${locations[0]?.id}`}><button>{venueNames.venue1}</button></a>
            </div>

            <div id='venue2button' className='venue2-button-overlay'>
                <a href={`/location/${locations[1]?.id}`}><button>{venueNames.venue2}</button></a>
            </div>

            <div id='venue3button' className='venue3-button-overlay'>
                <a href={`/location/${locations[2]?.id}`}><button>{venueNames.venue3}</button></a>
            </div>

            <div id='venue4button' className='venue4-button-overlay'>
                <a href={`/location/${locations[3]?.id}`}><button>{venueNames.venue4}</button></a>
            </div>

            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000.32 500" xmlSpace="preserve">
                <image id="background" xlinkHref={unitygrid} transform="matrix(0.48 0 0 0.48 0 0)"></image>
                
                <a href={`/location/${locations[0]?.id}`}><polygon id="venue1" points="..." /></a>
                <a href={`/location/${locations[1]?.id}`}><polygon id="venue2" points="..." /></a>
                <a href={`/location/${locations[2]?.id}`}><polygon id="venue3" points="..." /></a>
                <a href={`/location/${locations[3]?.id}`}><polygon id="venue4" points="..." /></a>
            </svg>
        </div>
    );
};

export default Locations;
