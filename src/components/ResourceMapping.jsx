import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';

const ResourceMapping = ({ location, loading, error }) => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    if (location) {
      const query = `
        [out:json];
        (
          node["amenity"="hospital"](around:3000,${location.lat},${location.lng});
          node["amenity"="police"](around:3000,${location.lat},${location.lng});
        );
        out body;
      `;

      axios
        .post('https://overpass-api.de/api/interpreter', `data=${encodeURIComponent(query)}`)
        .then((res) => {
          console.log('API Response:', res.data);
          setPlaces(res.data.elements);
        })
        .catch((err) => {
          console.error('Overpass API error:', err);
        });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4 text-center text-red-600">Nearby Resources</h2>
      
      {/* Show loading or error state */}
      {loading && <p className="text-center text-gray-600">Getting your location...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}

      {/* Show map when location is available */}
      {location && !loading && !error ? (
        <MapContainer
          center={[location.lat, location.lng]}
          zoom={14}
          style={{ height: '90vh', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />

          {/* Your location marker */}
          <Marker position={[location.lat, location.lng]}>
            <Popup>You are here!</Popup>
          </Marker>

          {/* Nearby hospitals & police */}
          {places.length > 0 ? (
            places.map((place) => (
              <Marker
                key={`${place.id}-${place.tags.amenity}`}
                position={[place.lat, place.lon]}
              >
                <Popup>
                  {place.tags.name || 'Unnamed'}<br />
                  Type: {place.tags.amenity}
                </Popup>
              </Marker>
            ))
          ) : (
            <p className="text-center text-gray-600">No nearby resources found.</p>
          )}
        </MapContainer>
      ) : (
        <p className="text-center text-gray-600">Loading map...</p>
      )}
    </div>
  );
};

export default ResourceMapping;
