const pool = require('../config/database');

// Function to get all locations
const getAllLocations = async () => {
  try {
    const result = await pool.query('SELECT * FROM locations');
    return result.rows; // Return the list of all locations
  } catch (error) {
    console.error('Error fetching locations:', error);
    throw error;
  }
};

// Function to get a specific location by ID
const getLocationById = async (locationId) => {
  try {
    const result = await pool.query('SELECT * FROM locations WHERE id = $1', [locationId]);
    return result.rows[0]; // Return the specific location
  } catch (error) {
    console.error('Error fetching location by ID:', error);
    throw error;
  }
};

module.exports = { getAllLocations, getLocationById };
