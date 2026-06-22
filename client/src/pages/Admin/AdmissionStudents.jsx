import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdmissionStudents = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Admission Students</h1>
        <button 
          onClick={() => navigate('/admin/admission-form')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium shadow-sm transition-colors flex items-center"
        >
          <span className="mr-2 text-lg">+</span> Make an Admission
        </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <p className="text-gray-600">List of admission students.</p>
      </div>
    </div>
  );
};

export default AdmissionStudents;
