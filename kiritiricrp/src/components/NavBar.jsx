import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Brand Name */}
        <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
          <p className="text-xl font-bold text-gray-800 hover:text-blue-600 transition duration-300">
            KIRITIRICRP POS
          </p>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm font-medium transition duration-300 hover:text-blue-600 ${
                isActive ? 'text-blue-600 underline decoration-2 underline-offset-4' : 'text-gray-800'
              }`
            }
          >
            <li>Home</li>
          </NavLink>

          <NavLink
            to="/point-of-service"
            className={({ isActive }) =>
              `text-sm font-medium transition duration-300 hover:text-blue-600 ${
                isActive ? 'text-blue-600 underline decoration-2 underline-offset-4' : 'text-gray-800'
              }`
            }
          >
            <li>Point Of Service</li>
          </NavLink>
        </ul>

        {/* Mobile Menu (Hamburger Icon) */}
        <div className="md:hidden flex items-center">
          <button
            className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-md"
            onClick={() => console.log('Open Mobile Menu')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
