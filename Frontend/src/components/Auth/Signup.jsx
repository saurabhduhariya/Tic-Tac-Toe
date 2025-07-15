import React, { useState } from 'react';
import { handleError, handleSuccess } from '../../utils/authUtils';

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
      const url = 'https://tic-tac-toe-ten-brown-99.vercel.app/auth/signup';
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
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50 animate-fadeIn">
      <div className="relative w-full max-w-md bg-gray-700 py-10 px-9 rounded-3xl shadow-2xl border-2 border-blue-500 animate-slideUp">
        <button className="absolute top-4 right-5 bg-none border-none text-3xl text-gray-300 cursor-pointer transition-colors duration-300 hover:text-red-400" onClick={onClose}>
          ×
        </button>
        <h2 className="text-center text-3xl mb-6 text-blue-500 font-bold">Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="flex flex-col mb-5">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={signupInfo.name}
              onChange={handleChange}
              required
              className="py-3.5 px-4 border-2 border-cyan-600 rounded-lg bg-gray-800 text-white text-base transition-all duration-300 focus:outline-none focus:border-blue-500 focus:shadow-[0_0_10px_rgba(84,104,255,0.3)] placeholder:text-gray-400"
            />
          </div>
          <div className="flex flex-col mb-5">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={signupInfo.email}
              onChange={handleChange}
              required
              className="py-3.5 px-4 border-2 border-cyan-600 rounded-lg bg-gray-800 text-white text-base transition-all duration-300 focus:outline-none focus:border-blue-500 focus:shadow-[0_0_10px_rgba(84,104,255,0.3)] placeholder:text-gray-400"
            />
          </div>
          <div className="flex flex-col mb-5">
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={signupInfo.password}
              onChange={handleChange}
              required
              className="py-3.5 px-4 border-2 border-cyan-600 rounded-lg bg-gray-800 text-white text-base transition-all duration-300 focus:outline-none focus:border-blue-500 focus:shadow-[0_0_10px_rgba(84,104,255,0.3)] placeholder:text-gray-400"
            />
          </div>
          <button type="submit" className="w-full py-3.5 bg-gradient-to-br from-blue-500 to-cyan-600 text-white border-none rounded-lg text-base font-semibold cursor-pointer transition-all duration-300 mt-2.5 hover:from-blue-600 hover:to-cyan-700 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(84,104,255,0.4)]">
            Sign Up
          </button>
        </form>
        <p className="text-center mt-5 text-gray-400 text-sm">
          Already have an account?{' '}
          <span onClick={onSwitchToLogin} className="text-blue-500 cursor-pointer no-underline font-semibold transition-colors duration-300 hover:text-cyan-600 hover:underline">
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
