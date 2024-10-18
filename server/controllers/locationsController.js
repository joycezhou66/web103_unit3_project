const pool = require('../config/database');

// Fetch all locations
const getAllLocations = async () => {
  const query = 'SELECT * FROM locations';
  const { rows } = await pool.query(query);
  return rows;
};

// Fetch location by ID
const getLocationById = async (locationId) => {
  const query = 'SELECT * FROM locations WHERE id = $1';
  const { rows } = await pool.query(query, [locationId]);
  return rows[0];
};

module.exports = {
  getAllLocations,
  getLocationById
};

