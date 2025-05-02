import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {
  const handleSOS = () => {
    alert('SOS Activated!');
  };

  return (

    <div className="min-h-screen bg-gray-100">
      <nav className="bg-red-600 text-white px-6 py-4 shadow-md flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold mb-4 md:mb-0">HelpMe</h1>

       
        <div className="flex justify-center space-x-4 mb-4 md:mb-0">

        <Link to="/resource-mapping"></Link>
          <button className="flex items-center bg-white text-red-600 px-4 py-2 rounded-lg hover:bg-gray-200">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 20l-5.447-2.724A2 2 0 013 15.382V5.618a2 2 0 011.553-1.946L9 2v18zm0 0l6-3V2l-6 3m6 15l5.447-2.724A2 2 0 0021 15.382V5.618a2 2 0 00-1.553-1.946L15 2v18z"></path>
            </svg>
            Resource Mapping
          </button>

          <button className="flex items-center bg-white text-red-600 px-4 py-2 rounded-lg hover:bg-gray-200">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4v16m8-8H4"></path>
            </svg>
            First Aid
          </button>

        </div>

       
        <div className="flex space-x-4 justify-center md:justify-end">

      
        <Link to="/Login">
  <button className="flex items-center bg-white text-red-600 px-4 py-2 rounded-lg hover:bg-gray-200">
    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2"
      viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 12H3m0 0l4-4m-4 4l4 4m9-9v14"></path>
    </svg>
    Login
  </button>
</Link>



          <button className="flex items-center bg-white text-red-600 px-4 py-2 rounded-lg hover:bg-gray-200">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 21v-2a4 4 0 00-3-3.87M12 3a4 4 0 100 8 4 4 0 000-8zM6 21v-2a4 4 0 013-3.87"></path>
            </svg>
            Signup
          </button>

        </div>
      </nav>

      <main className="flex items-center justify-center h-[80vh]">
        <button
          onClick={handleSOS}
          className="bg-red-600 text-white text-3xl font-bold py-6 px-10 rounded-full animate-pulse shadow-lg hover:scale-105 transition duration-300"
        >
          SOS
        </button>
      </main>
    </div>
  );
};

export default HomePage;
