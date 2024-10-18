const express = require('express');
const { getAllLocations, getLocationById } = require('../controllers/locationsController');

const router = express.Router();

router.get('/locations', async (req, res) => {
  try {
    const locations = await getAllLocations();
    res.json(locations);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve locations' });
  }
});

router.get('/locations/:locationId', async (req, res) => {
  try {
    const { locationId } = req.params;
    const location = await getLocationById(locationId);
    res.json(location);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve the specified location' });
  }
});

module.exports = router;
