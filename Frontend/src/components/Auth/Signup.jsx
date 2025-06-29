import React, { useState } from 'react';
import { handleError, handleSuccess } from '../../utils/authUtils';
import './Auth.css';

const Signup = ({ onClose, onSwitchToLogin }) => {
  const [signupInfo, setSignupInfo] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;

    if (!name || !email || !password) {
      return handleError('All fields are required');
    }

    try {
      const url = 'http://localhost:8080/auth/signup';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupInfo),
      });

      const result = await response.json();
      const { success, message, error } = result;

      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          onSwitchToLogin();
        }, 1000);
      } else if (error) {
        const details = error?.details?.[0]?.message || 'Signup error';
        handleError(details);
      } else {
        handleError(message);
      }
    } catch (err) {
      handleError('Network error. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <h2 className="auth-title">Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={signupInfo.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={signupInfo.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={signupInfo.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="auth-button">
            Sign Up
          </button>
        </form>
        <p className="auth-switch">
          Already have an account?{' '}
          <span onClick={onSwitchToLogin} className="auth-link">
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
