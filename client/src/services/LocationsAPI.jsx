const express = require('express');
const router = express.Router();
const pool = require('./database');

// Fetch all locations
router.get('/locations', async (req, res) => {
  try {
    const result = await pool.query('SELECT id, name FROM locations');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching locations:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Fetch location by ID
router.get('/locations/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT id, name FROM locations WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Location not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error(`Error fetching location with ID ${id}:`, error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
