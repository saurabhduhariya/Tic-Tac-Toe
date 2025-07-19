// src/components/Auth/LoginLink.jsx
import React, { useState, useEffect, useRef } from 'react';
import Login from './Login';
import Signup from './Signup';
import { isAuthenticated, getLoggedInUser, logout } from '../../utils/authUtils';
import { FaUserCircle, FaSignOutAlt, FaChevronDown } from 'react-icons/fa';

const LoginLink = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (isAuthenticated()) {
      setIsLoggedIn(true);
      setUsername(getLoggedInUser());
    }
    
    // Handle clicks outside the dropdown
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLoginClick = () => {
    if (isLoggedIn) {
      setShowDropdown(!showDropdown);
    } else {
      setShowLogin(true);
    }
  };

  const handleLoginSuccess = (name) => {
    setIsLoggedIn(true);
    setUsername(name);
    setShowLogin(false);
    setShowDropdown(false);
  };

  const handleLogout = () => {
    logout();
    setIsLoggedIn(false);
    setUsername('');
    setShowDropdown(false);
  };

  const handleCloseAuth = () => {
    setShowLogin(false);
    setShowSignup(false);
  };

  const handleSwitchToSignup = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  const handleSwitchToLogin = () => {
    setShowSignup(false);
    setShowLogin(true);
  };

  return (
    <>
      <div className="relative" ref={dropdownRef}>
        {!isLoggedIn ? (
          <button 
            onClick={handleLoginClick}
            className="flex items-center gap-2 bg-gray-800/50 border border-cyan-500/30 py-2 px-4 rounded-xl text-cyan-400 font-semibold transition-all duration-300 hover:bg-gray-800"
          >
            Login / Sign Up
          </button>
        ) : (
          <div className="relative">
            <button 
              onClick={handleLoginClick}
              className="flex items-center gap-2 bg-gray-800/50 border border-cyan-500/30 py-2 px-4 rounded-xl text-cyan-400 font-semibold transition-all duration-300 hover:bg-gray-800"
            >
              <FaUserCircle className="text-lg" />
              <span className="truncate max-w-[100px]">{username}</span>
              <FaChevronDown className={`text-xs transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
            </button>
            
            {showDropdown && (
              <div className="absolute top-full right-0 mt-2 glass-effect rounded-xl shadow-lg overflow-hidden z-10 animate-fadeIn min-w-full">
                <button 
                  onClick={handleLogout}
                  className="flex items-center gap-2 w-full py-2.5 px-4 text-sm text-red-400 hover:bg-gray-700 transition-colors duration-300"
                >
                  <FaSignOutAlt /> Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {showLogin && (
        <Login
          onClose={handleCloseAuth}
          onSwitchToSignup={handleSwitchToSignup}
          onLoginSuccess={handleLoginSuccess}
        />
      )}

      {showSignup && (
        <Signup
          onClose={handleCloseAuth}
          onSwitchToLogin={handleSwitchToLogin}
        />
      )}
    </>
  );
};

export default LoginLink;