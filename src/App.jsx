
import EmergencyForm from "./EmergencyForm";
import React from 'react';
import FirstAid from './FirstAid/FirstAid'
import Homepage from './Homepage';
import ResourceMapping from './components/ResourceMapping'; // Import ResourceMapping
import useLiveLocation from './components/LiveLocation'; // Import the hook
import Login from './components/Login'
import Signup from './components/Signup'
import User from './components/User'

function App() {
  const { location, loading, error } = useLiveLocation(); // Use the live location hook

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Homepage />
      <FirstAid />
      <ResourceMapping location={location} loading={loading} error={error} />
      <User />
      <Login />
      <Signup />
    </div>
  );
}

export default App;
