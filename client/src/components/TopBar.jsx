import React from 'react';
import { useLocation } from 'react-router-dom';

const TopBar = ({ role }) => {
  const location = useLocation();
  const pathParts = location.pathname.split('/').filter(Boolean);
  
  // Format breadcrumbs safely
  const breadcrumbs = pathParts.map(part => {
    return part.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  });

  return (
    <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 fixed top-0 right-0 left-56 z-40">
      <div className="flex items-center text-sm">
        <span className="text-gray-600 capitalize">{role}</span>
        {breadcrumbs.length > 1 && (
          <>
            <svg className="w-4 h-4 mx-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-black font-semibold">{breadcrumbs[1]}</span>
          </>
        )}
      </div>
      
      <div className="flex items-center text-sm text-gray-600">
        <span className="mr-2">Academic Year:</span>
        <select className="bg-transparent border-none font-semibold text-gray-900 focus:ring-0 cursor-pointer outline-none">
          <option>2025-2026</option>
          <option>2024-2025</option>
        </select>
      </div>
    </div>
  );
};

export default TopBar;
