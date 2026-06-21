import React from 'react';

const MyProfile = () => {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Profile Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Profile Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex-shrink-0"></div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-lg font-bold text-gray-900">ARUNPRASATH P</h2>
            <p className="text-sm text-gray-500 font-medium">Student</p>
            <p className="text-sm text-blue-400 font-medium mt-1">COMPUTER SCIENCE AND ENGINEERING</p>
            <div className="mt-3">
              <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded font-semibold border border-gray-200">REGULAR</span>
            </div>
            <div className="mt-4 flex space-x-2 justify-center md:justify-start">
              <button className="bg-blue-600 text-white text-sm px-4 py-1.5 rounded flex items-center hover:bg-blue-700">
                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        {/* Bio Data */}
        <div className="md:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-blue-600 font-semibold mb-4 text-sm flex items-center">
             <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
             BIO-DATA
          </h3>
          <div className="grid grid-cols-2 gap-y-3 text-sm">
            <div className="text-gray-500">DOB</div>
            <div className="font-medium text-right text-gray-900">12/09/2006 (19)</div>
            <div className="text-gray-500">Gender</div>
            <div className="font-medium text-right text-gray-900">Male</div>
            <div className="text-gray-500">Blood Group</div>
            <div className="font-medium text-right text-gray-900">O+</div>
            <div className="text-gray-500">Nationality</div>
            <div className="font-medium text-right text-gray-900">INDIAN</div>
            <div className="text-gray-500">Religion</div>
            <div className="font-medium text-right text-gray-900">HINDU</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
