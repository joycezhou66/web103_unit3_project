const express = require('express');
const eventsRoutes = require('./routes/eventsRoutes');
const locationsRoutes = require('./routes/locationsRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON data
app.use(express.json());

// Use the events and locations routes
app.use('/api', eventsRoutes);
app.use('/api', locationsRoutes);

// Default route to check if server is running
app.get('/', (req, res) => {
  res.send('Welcome to the Virtual Community Space API');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
