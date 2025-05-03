import React, { useState } from "react";
import firstAidData from "./firstAidData";
import { FaFireAlt, FaBandAid, FaAmbulance, FaHandHoldingHeart, FaHeartbeat, FaAllergies, FaSun, FaSnowflake, FaLungs, FaBolt } from 'react-icons/fa';

const FirstAid = () => {
  const [selected, setSelected] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = firstAidData.filter(item =>
    item.condition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderIcon = (iconName) => {
    switch (iconName) {
      case "FaFireAlt":
        return <FaFireAlt className="inline mr-2" size={24} />;
      case "FaBandAid":
        return <FaBandAid className="inline mr-2" size={24} />;
      case "FaAmbulance":
        return <FaAmbulance className="inline mr-2" size={24} />;
      case "FaHandHoldingHeart":
        return <FaHandHoldingHeart className="inline mr-2" size={24} />;
      case "FaHeartbeat":
        return <FaHeartbeat className="inline mr-2" size={24} />;
      case "FaAllergies":
        return <FaAllergies className="inline mr-2" size={24} />;
      case "FaSun":
        return <FaSun className="inline mr-2" size={24} />;
      case "FaSnowflake":
        return <FaSnowflake className="inline mr-2" size={24} />;
      case "FaLungs":
        return <FaLungs className="inline mr-2" size={24} />;
      case "FaBolt":
        return <FaBolt className="inline mr-2" size={24} />;
      default:
        return null;
    }
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-red-600">Quick First Aid Guide</h1>

      <input
        type="text"
        placeholder="Search condition (e.g., burn)"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full mb-6 p-2 border border-gray-300 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
        {filteredData.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelected(item)}
            className="bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-600 hover:to-yellow-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
          >
            {renderIcon(item.icon)}{item.condition}
          </button>
        ))}
      </div>

      {selected && (
  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 shadow-lg rounded-lg p-6 border border-gray-200">
    <h2 className="text-3xl font-bold text-center text-indigo-800 mb-6">{selected.condition}</h2>

    <div className="mb-6">
      <h3 className="text-2xl font-semibold text-indigo-600 mb-3">Steps</h3>
      <ul className="list-decimal pl-6 text-gray-800 space-y-2">
        {selected.steps.map((step, index) => (
          <li key={index} className="text-lg">{step}</li>
        ))}
      </ul>
    </div>

    <div>
      <h3 className="text-2xl font-semibold text-indigo-600 mb-3">Precautions</h3>
      <ul className="list-disc pl-6 text-gray-800 space-y-2">
        {selected.precautions.map((precaution, index) => (
          <li key={index} className="text-lg">{precaution}</li>
        ))}
      </ul>
    </div>
  </div>
)}

    </div>
  );
};

export default FirstAid;
