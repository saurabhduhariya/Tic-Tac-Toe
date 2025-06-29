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
    // Check authentication status on component mount
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
      <div className="login-link-container">
        {!isLoggedIn ? (
          <a href="#" onClick={handleLoginClick} className="login-link">
            Login
          </a>
        ) : (
          <div className="user-info-simple">
            <span className="welcome-text">👋 {username}</span>
            <a href="#" onClick={handleLogout} className="logout-link">
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
