const pool = require('../config/database');

// Function to get all events for a specific location
const getEventsByLocation = async (locationId) => {
  try {
    const result = await pool.query('SELECT * FROM events WHERE location_id = $1', [locationId]);
    return result.rows; // Return the list of events for the specified location
  } catch (error) {
    console.error('Error fetching events by location:', error);
    throw error;
  }
};

// Function to get all events
const getAllEvents = async () => {
  try {
    const result = await pool.query('SELECT * FROM events');
    return result.rows; // Return the list of all events
  } catch (error) {
    console.error('Error fetching all events:', error);
    throw error;
  }
};

module.exports = { getEventsByLocation, getAllEvents };
