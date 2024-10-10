// Function to fetch all locations
export const getAllLocations = async () => {
    try {
      const response = await fetch('/api/locations');
      if (!response.ok) {
        throw new Error('Failed to fetch locations');
      }
      const locations = await response.json();
      return locations;
    } catch (error) {
      console.error('Error fetching locations:', error);
      return [];
    }
  };
  
  // Function to fetch a specific location by ID
  export const getLocationById = async (locationId) => {
    try {
      const response = await fetch(`/api/locations/${locationId}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch location with ID ${locationId}`);
      }
      const location = await response.json();
      return location;
    } catch (error) {
      console.error('Error fetching location by ID:', error);
      return null;
    }
  };
  