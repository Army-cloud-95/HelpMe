// components/Login.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Regular expressions for phone number and password validation
  const phoneNumberRegex = /^[+]?[0-9]{10,13}$/; // Allows for optional '+' and up to 13 digits
  const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Reset error state on form submit

    if (!phoneNumber || !password) {
      setError('Both fields are required!');
      return;
    }

    // Validate phone number format
    if (!phoneNumberRegex.test(phoneNumber)) {
      setError('Please enter a valid phone number (e.g., +1234567890 or 1234567890).');
      return;
    }

    // Validate password (uppercase and special character)
    if (!passwordRegex.test(password)) {
      setError('Password must contain at least one uppercase letter, one special character, and be at least 8 characters long.');
      return;
    }

    // If validation passes, handle login (e.g., API call)
    console.log('Phone Number:', phoneNumber);
    console.log('Password:', password);
    setError(''); // Clear any previous error
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4 text-center text-red-600">Login</h2>
        {error && <div className="bg-red-400 text-white p-2 mb-4 rounded">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition duration-200"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Don't have an account?{' '}
          <Link to="/signup" className="text-red-500 hover:text-red-600">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;