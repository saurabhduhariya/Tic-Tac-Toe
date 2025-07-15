import React from 'react';

const TailwindTest = () => {
  return (
    <div className="bg-blue-500 text-white p-4 rounded-lg shadow-lg m-4">
      <h2 className="text-2xl font-bold mb-2">Tailwind CSS Test</h2>
      <p className="text-gray-100">If you can see this styled properly, Tailwind is working!</p>
      <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mt-2 transition-colors">
        Test Button
      </button>
      <div className="flex space-x-2 mt-4">
        <div className="w-4 h-4 bg-red-500 rounded"></div>
        <div className="w-4 h-4 bg-yellow-500 rounded"></div>
        <div className="w-4 h-4 bg-green-500 rounded"></div>
      </div>
    </div>
  );
};

export default TailwindTest;
