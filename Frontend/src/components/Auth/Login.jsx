import React, { useState } from 'react';
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { handleError, handleSuccess } from '../../utils/authUtils';

const Login = ({ onClose, onSwitchToSignup, onLoginSuccess }) => {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

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
      const url =
        window.location.hostname === 'localhost'
          ? 'http://localhost:8080/auth/login'
          : 'https://tic-tac-toe-ten-brown-99.vercel.app/auth/login';
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
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50 animate-fadeIn px-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md glass-effect py-8 lg:py-10 px-6 lg:px-9 rounded-2xl shadow-2xl border border-cyan-500/30 animate-slideUp glow-cyan">
        <button 
          className="absolute top-3 lg:top-4 right-4 lg:right-5 bg-none border-none text-2xl lg:text-3xl text-gray-300 cursor-pointer transition-colors duration-300 hover:text-red-400" 
          onClick={onClose}
        >
          ×
        </button>
        
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaUser className="text-2xl text-white" />
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Welcome Back!
          </h2>
          <p className="text-gray-400 mt-2">Sign in to continue your adventure</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-5">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-cyan-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={loginInfo.email}
              onChange={handleChange}
              required
              className="w-full py-3.5 pl-10 pr-4 border border-cyan-500/30 rounded-xl bg-gray-800/50 text-white text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent placeholder:text-gray-500"
            />
          </div>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-cyan-500">
              <FaLock className="h-5 w-5" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={loginInfo.password}
              onChange={handleChange}
              required
              className="w-full py-3.5 pl-10 pr-12 border border-cyan-500/30 rounded-xl bg-gray-800/50 text-white text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent placeholder:text-gray-500"
            />
            <button 
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-cyan-500 hover:text-cyan-300"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash className="h-5 w-5" /> : <FaEye className="h-5 w-5" />}
            </button>
          </div>
          
          <div className="text-right mb-2">
            <a href="#" className="text-sm text-cyan-400 hover:text-cyan-300 hover:underline transition-colors">
              Forgot password?
            </a>
          </div>
          
          <button 
            type="submit" 
            className="w-full py-3.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white border-none rounded-xl text-base font-bold cursor-pointer transition-all duration-300 mt-2.5 hover:from-cyan-700 hover:to-blue-700 hover:scale-[1.02] animate-gradient"
          >
            Login
          </button>
        </form>
                <p className="text-center text-gray-400 text-sm">
          Don't have an account?{' '}
          <span 
            onClick={onSwitchToSignup} 
            className="text-cyan-400 cursor-pointer font-semibold transition-colors duration-300 hover:text-cyan-300 hover:underline"
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;