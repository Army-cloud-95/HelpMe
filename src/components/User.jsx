import React, { useState, useEffect } from 'react';
import { User, MapPin, Phone, AlertCircle, Calendar, Droplet, Weight, FileText, Plus } from 'lucide-react';

const UserProfilePage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [dob, setDob] = useState('');
  const [allergies, setAllergies] = useState('');
  const [weight, setWeight] = useState('');
  const [location, setLocation] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');
  const [medicalFile, setMedicalFile] = useState(null);
  const [profilePic, setProfilePic] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          setLocation(`${lat}, ${lon}`);
        },
        (error) => {
          console.error('Error fetching location:', error);
        }
      );
    }
  }, []);

  const handleFileChange = (e) => {
    setMedicalFile(e.target.files[0]);
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      console.log('User Data:', { name, age, bloodGroup, dob, allergies, weight, location, emergencyContact, medicalFile });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitSuccess(false), 3000);
    }, 1500);
  };

  const InputField = ({ icon, label, id, type = "text", value, onChange, placeholder, readonly = false }) => (
    <div className="relative mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor={id}>{label}</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {icon}
        </div>
        <input
          type={type}
          id={id}
          className={`w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition ${readonly ? 'bg-gray-50' : ''}`}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          readOnly={readonly}
        />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 p-4 md:p-6">
      {/* Background decoration */}
      <div className="fixed inset-0 h-48 z-0"></div>
      
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Top Header Card - Profile Picture & Username */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-6">
          <div className="relative bg-gradient-to-r from-red-600 to-red-400 h-32"></div>
          <div className="px-6 pb-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 -mt-16">
              <label htmlFor="profileUpload" className="cursor-pointer relative group">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src={profilePic || "/api/placeholder/200/200"}
                   
                    className="w-full h-full object-cover group-hover:opacity-80 transition duration-300"
                  />
                </div>
                <input
                  type="file"
                  id="profileUpload"
                  accept="image/*"
                  capture="environment"
                  onChange={handleProfilePicChange}
                  className="hidden"
                />
                <div className="absolute bottom-0 left-0 w-full text-center text-sm bg-black bg-opacity-50 text-white py-1 opacity-0 group-hover:opacity-100 transition">
                  Change Photo
                </div>
              </label>

            
            </div>
            <div>
            <h1 className="text-3xl font-bold text-red-500">{name || 'User Name'}</h1>
            <p className="text-sm text-red-300">Your profile summary here</p>
          </div>
          </div>
        </div>

        {/* Main Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1: User Information */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">Personal Details</h2>
              <User size={22} className="text-red-500" />
            </div>

            <InputField 
              icon={<User size={18} className="text-gray-500" />}
              label="Full Name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
            />
            
            <div className="grid grid-cols-2 gap-4">
              <InputField 
                icon={<Calendar size={18} className="text-gray-500" />}
                label="Age"
                id="age"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Your age"
              />
              
              <InputField 
                icon={<Droplet size={18} className="text-gray-500" />}
                label="Blood Group"
                id="bloodGroup"
                value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}
                placeholder="e.g., A+"
              />
            </div>
            
            <InputField 
              icon={<Calendar size={18} className="text-gray-500" />}
              label="Date of Birth"
              id="dob"
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
            
            <InputField 
              icon={<AlertCircle size={18} className="text-gray-500" />}
              label="Allergies"
              id="allergies"
              value={allergies}
              onChange={(e) => setAllergies(e.target.value)}
              placeholder="List any allergies"
            />
            
            <InputField 
              icon={<Weight size={18} className="text-gray-500" />}
              label="Weight (kg)"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Your weight in kg"
            />
            
            <InputField 
              icon={<MapPin size={18} className="text-gray-500" />}
              label="Current Location"
              id="location"
              value={location}
              readonly={true}
              placeholder="Detecting location..."
            />
          </div>

          {/* Column 2: Upload Medical Report */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">Medical Reports</h2>
              <FileText size={22} className="text-red-500" />
            </div>

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center mb-6">
              <FileText size={48} className="text-gray-400 mb-4" />
              <label htmlFor="medicalFile" className="cursor-pointer">
                <span className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200 flex items-center gap-2">
                  <Plus size={16} />
                  Upload Medical Report
                </span>
                <input
                  type="file"
                  id="medicalFile"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
              <p className="text-sm text-gray-500 mt-3">Supported formats: PDF, JPG, PNG</p>
            </div>

            {medicalFile && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-700 flex items-center gap-2 mb-6">
                <FileText size={18} />
                <p className="text-sm">File Selected: {medicalFile.name}</p>
              </div>
            )}

            <div className="mt-auto">
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition duration-200 flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : submitSuccess ? (
                  <>
                    <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Submitted!
                  </>
                ) : (
                  "Save Profile"
                )}
              </button>
            </div>
          </div>

          {/* Column 3: Emergency Contacts */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">Emergency Contacts</h2>
              <Phone size={22} className="text-red-500" />
            </div>

            {/* Contact 1 */}
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <h3 className="text-md font-medium text-gray-700 mb-2">Primary Contact</h3>
              
              <InputField 
                icon={<User size={18} className="text-gray-500" />}
                label="Name"
                id="contactName1"
                placeholder="Enter contact name"
              />
              
              <InputField 
                icon={<Phone size={18} className="text-gray-500" />}
                label="Phone Number"
                id="contact1"
                placeholder="Enter phone number"
              />
            </div>
            
            {/* Contact 2 */}
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <h3 className="text-md font-medium text-gray-700 mb-2">Secondary Contact</h3>
              
              <InputField 
                icon={<User size={18} className="text-gray-500" />}
                label="Name"
                id="contactName2"
                placeholder="Enter contact name"
              />
              
              <InputField 
                icon={<Phone size={18} className="text-gray-500" />}
                label="Phone Number"
                id="contact2"
                placeholder="Enter phone number"
              />
            </div>
            
            {/* Contact 3 */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-md font-medium text-gray-700 mb-2">Additional Contact</h3>
              
              <InputField 
                icon={<User size={18} className="text-gray-500" />}
                label="Name"
                id="contactName3"
                placeholder="Enter contact name"
              />
              
              <InputField 
                icon={<Phone size={18} className="text-gray-500" />}
                label="Phone Number"
                id="contact3"
                placeholder="Enter phone number"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;