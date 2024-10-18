const express = require('express');
const { getAllEvents, getEventsByLocation } = require('../controllers/eventsController');

const router = express.Router();

router.get('/events', async (req, res) => {
  try {
    const events = await getAllEvents();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve events' });
  }
});

router.get('/events/location/:locationId', async (req, res) => {
  try {
    const { locationId } = req.params;
    const events = await getEventsByLocation(locationId);
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve events for the location' });
  }
});

module.exports = router;

