import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import

const SignUpPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); // Updated hook

  // Regular expressions for phone number and password validation
  const phoneNumberRegex = /^[+]?[0-9]{10,13}$/; // Allows for optional '+' and up to 13 digits
  const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Reset error state on form submit

    // Check if all fields are filled
    if (!firstName || !lastName || !dob || !phoneNumber || !password || !confirmPassword) {
      setError('All fields are required!');
      return;
    }

    // Validate phone number format
    if (!phoneNumberRegex.test(phoneNumber)) {
      setError('Please enter a valid phone number (e.g., +1234567890 or 1234567890).');
      return;
    }

    // Validate password format (must contain at least one uppercase letter, one special character, and be at least 8 characters long)
    if (!passwordRegex.test(password)) {
      setError('Password must contain at least one uppercase letter, one special character, and be at least 8 characters long.');
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    // If validation passes, handle sign up (you can replace this with an API call)
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('DOB:', dob);
    console.log('Phone Number:', phoneNumber);
    console.log('Password:', password);
    setError(''); // Clear any previous error

    // Redirect to login page after successful sign up
    navigate('/login'); // Updated to use navigate instead of history.push
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-4 text-center text-red-600">Sign Up</h2>
        {error && <div className="bg-red-400 text-white p-2 mb-4 rounded">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Enter your first name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Enter your last name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="dob">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

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

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md"
              placeholder="Confirm your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition duration-200"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-center text-sm">
          Already have an account?{' '}
          <a href="/login" className="text-red-500 hover:text-red-600">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
