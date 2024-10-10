// Function to fetch all events
export const getAllEvents = async () => {
    try {
      const response = await fetch('/api/events');
      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }
      const events = await response.json();
      return events;
    } catch (error) {
      console.error('Error fetching events:', error);
      return [];
    }
  };
  
  // Function to fetch events by location ID
  export const getEventsByLocation = async (locationId) => {
    try {
      const response = await fetch(`/api/events/location/${locationId}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch events for location ID ${locationId}`);
      }
      const events = await response.json();
      return events;
    } catch (error) {
      console.error('Error fetching events by location:', error);
      return [];
    }
  };
  