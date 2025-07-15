import React, { useState, useEffect } from 'react';
import Login from './Login';
import Signup from './Signup';
import { isAuthenticated, getLoggedInUser, logout } from '../../utils/authUtils';

const LoginLink = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    if (isAuthenticated()) {
      setIsLoggedIn(true);
      setUsername(getLoggedInUser());
    }
  }, []);

  const handleLoginClick = () => {
    if (isLoggedIn) {
      handleLogout();
    } else {
      setShowLogin(true);
    }
  };

  const handleLoginSuccess = (name) => {
    setIsLoggedIn(true);
    setUsername(name);
    setShowLogin(false);
  };

  const handleLogout = () => {
    logout();
    setIsLoggedIn(false);
    setUsername('');
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
      <div className="w-full mb-4 text-center">
        {!isLoggedIn ? (
          <a href="#" onClick={handleLoginClick} className="text-blue-500 no-underline text-lg font-semibold transition-colors duration-300 hover:text-cyan-600 hover:underline">
            Login
          </a>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-blue-500 font-semibold">👋 {username}</span>
            <a href="#" onClick={handleLogout} className="text-red-400 no-underline text-xs transition-colors duration-300 hover:text-red-300 hover:underline">
              Logout
            </a>
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
