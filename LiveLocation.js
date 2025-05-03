import { useState, useEffect } from 'react';

const useLiveLocation = () => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOnline, setIsOnline] = useState(true); // Track online status

  // Check if the user is online or offline
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Clean up the event listeners
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Fetch location when online
  useEffect(() => {
    if (navigator.geolocation && isOnline) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setLoading(false);
        },
        (err) => {
          console.error('Location Error:', err);
          setError('Unable to retrieve your location. Please try again later.');
          setLoading(false);
        }
      );
    } else {
      if (!isOnline) {
        setError('No location available. Please try again when online.');
        setLoading(false);
      } else {
        setError('Geolocation is not supported by your browser.');
        setLoading(false);
      }
    }
  }, [isOnline]);

  // Optionally, set a fallback location when offline
  useEffect(() => {
    if (!isOnline && !location) {
      // Set a default fallback location (e.g., coordinates of a central city)
      setLocation({ lat: 37.7749, lng: -122.4194 }); // Example: San Francisco
    }
  }, [isOnline, location]);

  return { location, loading, error };
};

export default useLiveLocation;
