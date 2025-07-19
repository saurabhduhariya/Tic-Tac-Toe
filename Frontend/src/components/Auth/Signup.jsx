import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import { handleError, handleSuccess } from '../../utils/authUtils';

const Signup = ({ onClose, onSwitchToLogin }) => {
  const [signupInfo, setSignupInfo] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

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
      const url = 
        window.location.hostname === 'localhost'
          ? 'http://localhost:8080/auth/signup'
          : 'https://tic-tac-toe-ten-brown-99.vercel.app/auth/signup';
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
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50 animate-fadeIn px-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md glass-effect py-8 lg:py-10 px-6 lg:px-9 rounded-2xl shadow-2xl border border-cyan-500/30 animate-slideUp glow-cyan">
        <button 
          className="absolute top-3 lg:top-4 right-4 lg:right-5 bg-none border-none text-2xl lg:text-3xl text-gray-300 cursor-pointer transition-colors duration-300 hover:text-red-400" 
          onClick={onClose}
        >
          ×
        </button>
        
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <FaUser className="text-2xl text-white" />
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Create Account
          </h2>
          <p className="text-gray-400 mt-2">Join us for an epic gaming experience</p>
        </div>
        
        <form onSubmit={handleSignup} className="space-y-5">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-purple-500">
              <FaUser className="h-5 w-5" />
            </div>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={signupInfo.name}
              onChange={handleChange}
              required
              className="w-full py-3.5 pl-10 pr-4 border border-cyan-500/30 rounded-xl bg-gray-800/50 text-white text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder:text-gray-500"
            />
          </div>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-purple-500">
              <FaEnvelope className="h-5 w-5" />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={signupInfo.email}
              onChange={handleChange}
              required
              className="w-full py-3.5 pl-10 pr-4 border border-cyan-500/30 rounded-xl bg-gray-800/50 text-white text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder:text-gray-500"
            />
          </div>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-purple-500">
              <FaLock className="h-5 w-5" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Create a password"
              value={signupInfo.password}
              onChange={handleChange}
              required
              className="w-full py-3.5 pl-10 pr-12 border border-cyan-500/30 rounded-xl bg-gray-800/50 text-white text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder:text-gray-500"
            />
            <button 
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-purple-500 hover:text-purple-300"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash className="h-5 w-5" /> : <FaEye className="h-5 w-5" />}
            </button>
          </div>
          
          <div className="flex items-start mb-2">
            <div className="flex items-center h-5">
              <input 
                id="terms" 
                type="checkbox" 
                className="w-4 h-4 bg-gray-800 border border-cyan-500/30 rounded focus:ring-2 focus:ring-purple-500" 
                required 
              />
            </div>
            <label htmlFor="terms" className="ml-2 text-sm text-gray-400">
              I agree to the <a href="#" className="text-cyan-400 hover:underline">Terms of Service</a> and <a href="#" className="text-cyan-400 hover:underline">Privacy Policy</a>
            </label>
          </div>
          
          <button 
            type="submit" 
            className="w-full py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-none rounded-xl text-base font-bold cursor-pointer transition-all duration-300 mt-2.5 hover:from-purple-700 hover:to-pink-700 hover:scale-[1.02] animate-gradient"
          >
            Create Account
          </button>
        </form>
        
        <p className="text-center mt-6 text-gray-400 text-sm">
          Already have an account?{' '}
          <span 
            onClick={onSwitchToLogin} 
            className="text-cyan-400 cursor-pointer font-semibold transition-colors duration-300 hover:text-cyan-300 hover:underline"
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;