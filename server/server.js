const express = require('express');
const cors = require('cors');
const locationsRoutes = require('./routes/locationsRoutes');
const eventsRoutes = require('./routes/eventsRoutes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/api', locationsRoutes);
app.use('/api', eventsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
