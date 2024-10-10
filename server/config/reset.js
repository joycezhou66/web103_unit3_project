const pool = require('./database');

// Function to reset the database
async function resetDatabase() {
  try {
    console.log('Resetting the database...');

    // Drop the existing tables if they exist
    await pool.query('DROP TABLE IF EXISTS events, locations');

    // Create the locations table
    await pool.query(`
      CREATE TABLE locations (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT
      );
    `);

    console.log('Locations table created successfully.');

    // Create the events table with a foreign key referencing locations
    await pool.query(`
      CREATE TABLE events (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        location_id INTEGER REFERENCES locations(id),
        event_date DATE NOT NULL,
        description TEXT
      );
    `);

    console.log('Events table created successfully.');

    console.log('Database reset complete.');
  } catch (error) {
    console.error('Error resetting the database:', error);
  } finally {
    pool.end(); // Close the database connection
  }
}

// Run the resetDatabase function
resetDatabase();
