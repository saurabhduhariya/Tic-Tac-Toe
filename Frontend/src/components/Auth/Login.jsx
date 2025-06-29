import React, { useState } from 'react';
import { handleError, handleSuccess } from '../../utils/authUtils';
import './Auth.css';

const Login = ({ onClose, onSwitchToSignup, onLoginSuccess }) => {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;

    if (!email || !password) {
      return handleError('All fields are required');
    }

    try {
      const url = 'http://localhost:8080/auth/login';
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginInfo),
      });

      const result = await response.json();
      const { success, message, jwttoken, name, error } = result;

      if (success) {
        handleSuccess(message);
        localStorage.setItem('jwtToken', jwttoken);
        localStorage.setItem('loggedInUser', name);
        setTimeout(() => {
          onLoginSuccess(name);
          onClose();
        }, 1000);
      } else if (error) {
        const details = error?.details?.[0]?.message || 'Login error';
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
        <h2 className="auth-title">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={loginInfo.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={loginInfo.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="auth-button">
            Login
          </button>
        </form>
        <p className="auth-switch">
          Don't have an account?{' '}
          <span onClick={onSwitchToSignup} className="auth-link">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
