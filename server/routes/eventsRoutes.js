const express = require('express');
const { getEventsByLocation, getAllEvents } = require('../controllers/eventsController');

const router = express.Router();

// Route to get all events
router.get('/events', async (req, res) => {
  try {
    const events = await getAllEvents();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve events' });
  }
});

// Route to get events by location
router.get('/events/location/:locationId', async (req, res) => {
  try {
    const { locationId } = req.params;
    const events = await getEventsByLocation(locationId);
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve events for the specified location' });
  }
});

module.exports = router;
