// components/Loader.jsx
import React, { useEffect, useState } from 'react';
import assets from '../assets/assets.js';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setProgress(current);
      if (current >= 100) {
        clearInterval(interval);
        onComplete(); // call parent to switch to main content
      }
    }, 20); // 20ms * 100 = 2000ms = 2 seconds

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="relative h-screen w-full flex flex-col justify-center items-center  text-white">
      <div className="absolute inset-0 -z-1">
        <img className='w-full h-full object-cover' src={assets.space} alt="" />
      </div>
      <h1 className="text-lg mb-4">Loading {progress}%</h1>
      <div className="w-64 h-2 overflow-hidden">
        <div
          className="h-full bg-purple-500 transition-all duration-40 ease-linear"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Loader;
