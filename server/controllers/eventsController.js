const pool = require('../config/database');

// Fetch all events
const getAllEvents = async () => {
  const query = 'SELECT * FROM events';
  const { rows } = await pool.query(query);
  return rows;
};

// Fetch events by location ID
const getEventsByLocation = async (locationId) => {
  const query = 'SELECT * FROM events WHERE location_id = $1';
  const { rows } = await pool.query(query, [locationId]);
  return rows;
};

module.exports = {
  getAllEvents,
  getEventsByLocation
};

