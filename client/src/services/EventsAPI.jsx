const express = require('express');
const router = express.Router();
const pool = require('./database');

// Fetch all events
router.get('/events', async (req, res) => {
  try {
    const result = await pool.query('SELECT id, title, event_date AS date, event_time AS time, image FROM events');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Fetch event by ID
router.get('/events/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT id, title, event_date AS date, event_time AS time, image FROM events WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Event not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error(`Error fetching event with ID ${id}:`, error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
