import React, { useState } from 'react';
import { Bell, MapPin, Heart, LogIn, UserPlus, Menu, X } from 'lucide-react';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sosActive, setSosActive] = useState(false);

  const handleSOS = () => {
    setSosActive(true);

    // Replace with your real emergency number
    const phoneNumber = '+1234567890';
    const message = 'Emergency! I need help.';
    const smsLink = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.location.href = smsLink;
    }, 10000); // 30 seconds delay
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-red-600 text-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold tracking-tight">HelpMe</div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-4">
              <button className="flex items-center px-4 py-2 rounded-md bg-red-700 hover:bg-red-800 transition duration-200">
                <MapPin className="w-5 h-5 mr-2" />
                Resource Map
              </button>
              <button className="flex items-center px-4 py-2 rounded-md bg-red-700 hover:bg-red-800 transition duration-200">
                <Heart className="w-5 h-5 mr-2" />
                First Aid
              </button>
            </nav>

            {/* Auth Buttons - Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="flex items-center px-4 py-2 rounded-md bg-white text-red-600 hover:bg-gray-100 transition duration-200">
                <LogIn className="w-5 h-5 mr-2" />
                Login
              </button>
              <button className="flex items-center px-4 py-2 rounded-md bg-white text-red-600 hover:bg-gray-100 transition duration-200">
                <UserPlus className="w-5 h-5 mr-2" />
                Sign Up
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                className="p-2 rounded-md hover:bg-red-700 focus:outline-none"
                onClick={toggleMenu}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-red-500 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button className="flex items-center w-full px-4 py-3 rounded-md bg-red-600 hover:bg-red-700 text-white transition duration-200">
              <MapPin className="w-5 h-5 mr-3" />
              Resource Map
            </button>
            <button className="flex items-center w-full px-4 py-3 rounded-md bg-red-600 hover:bg-red-700 text-white transition duration-200">
              <Heart className="w-5 h-5 mr-3" />
              First Aid
            </button>
            <button className="flex items-center w-full px-4 py-3 rounded-md bg-white text-red-600 hover:bg-gray-100 transition duration-200">
              <LogIn className="w-5 h-5 mr-3" />
              Login
            </button>
            <button className="flex items-center w-full px-4 py-3 rounded-md bg-white text-red-600 hover:bg-gray-100 transition duration-200">
              <UserPlus className="w-5 h-5 mr-3" />
              Sign Up
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-4 flex flex-col items-center justify-center py-12 flex-grow">
        {/* Info Text */}
        <div className="text-center mb-12 max-w-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Emergency Assistance</h2>
          <p className="text-gray-600">
            Press the SOS button below. It will automatically send an SMS in 10 seconds unless canceled.
          </p>
        </div>

        {/* SOS Button */}
        <div className="relative">
          {sosActive && (
            <div className="absolute inset-0 rounded-full bg-red-600 opacity-30 animate-ping"></div>
          )}
          <button
            onClick={handleSOS}
            className={`relative z-10 bg-red-600 text-white text-3xl font-bold py-8 px-12 rounded-full shadow-xl hover:shadow-2xl transform transition duration-300 ${
              sosActive ? 'animate-pulse bg-red-700' : 'hover:scale-105'
            }`}
          >
            SOS
          </button>
        </div>

        {/* Status Text */}
        {sosActive && (
          <div className="mt-8 text-center">
            <p className="text-red-600 font-semibold animate-pulse">
              Sending SMS in 10 seconds. Stay calm.
            </p>
          </div>
        )}

        {/* Quick Access Buttons */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl">
          <button className="flex flex-col items-center justify-center p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition duration-200">
            <MapPin className="w-8 h-8 text-red-600 mb-2" />
            <span className="text-gray-700 font-medium">Nearby Hospitals</span>
          </button>
          <button className="flex flex-col items-center justify-center p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition duration-200">
            <Bell className="w-8 h-8 text-red-600 mb-2" />
            <span className="text-gray-700 font-medium">Emergency Contacts</span>
          </button>
          <button className="flex flex-col items-center justify-center p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition duration-200">
            <Heart className="w-8 h-8 text-red-600 mb-2" />
            <span className="text-gray-700 font-medium">Medical Info</span>
          </button>
          <button className="flex flex-col items-center justify-center p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition duration-200">
            <div className="w-8 h-8 flex items-center justify-center text-red-600 mb-2">
              <span className="text-xl font-bold">+</span>
            </div>
            <span className="text-gray-700 font-medium">More Options</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
