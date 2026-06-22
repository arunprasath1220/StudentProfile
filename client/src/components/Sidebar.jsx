import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Sidebar = ({ role }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const studentLinks = [
    { name: 'My Profile', path: '/student/profile', icon: 'M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z' },
    { name: 'Dashboard', path: '/student/dashboard', icon: 'M4 3h5a1 1 0 011 1v7a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zM15 3h5a1 1 0 011 1v3a1 1 0 01-1 1h-5a1 1 0 01-1-1V4a1 1 0 011-1zM15 12h5a1 1 0 011 1v7a1 1 0 01-1 1h-5a1 1 0 01-1-1v-7a1 1 0 011-1zM4 16h5a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3a1 1 0 011-1z' },
  ];

  const adminLinks = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: 'M4 3h5a1 1 0 011 1v7a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zM15 3h5a1 1 0 011 1v3a1 1 0 01-1 1h-5a1 1 0 01-1-1V4a1 1 0 011-1zM15 12h5a1 1 0 011 1v7a1 1 0 01-1 1h-5a1 1 0 01-1-1v-7a1 1 0 011-1zM4 16h5a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3a1 1 0 011-1z' },
    { name: 'Admission Students', path: '/admin/admission-students', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
    { name: 'Student Profile', path: '/admin/student-profile', icon: 'M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z' },
    { name: 'Student Details', path: '/admin/student-details', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
  ];

  const links = role === 'admin' ? adminLinks : studentLinks;

  return (
    <div className="w-56 bg-white border-r border-gray-200 flex flex-col h-screen fixed left-0 top-0 z-50">
      <div className="h-16 flex items-center px-6 border-b border-gray-200">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="w-6 h-6 mr-2 flex-shrink-0">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
        </svg>
        <span className="font-bold text-black text-sm whitespace-nowrap">BIT Student Profile</span>
      </div>

      <div className="flex-1 overflow-y-auto py-4">
        <div className="px-6 mb-2 mt-2">
          <p className="text-xs font-semibold text-slate-600 uppercase">OVERVIEW</p>
        </div>
        <nav className="space-y-1">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center px-6 py-2 text-sm font-medium border-r-2 transition-colors ${
                  isActive
                    ? 'bg-blue-50/80 border-blue-600 text-blue-600'
                    : 'border-transparent text-black hover:bg-slate-50 hover:text-black'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <svg className={`w-[18px] h-[18px] mr-3 ${isActive ? 'text-blue-600' : 'text-slate-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={link.icon} />
                  </svg>
                  {link.name}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="py-4 border-t border-gray-200">
        <button
          onClick={handleLogout}
          className="flex items-center w-full px-6 py-2 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
        >
          <svg className="w-[18px] h-[18px] mr-3" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
          </svg>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
