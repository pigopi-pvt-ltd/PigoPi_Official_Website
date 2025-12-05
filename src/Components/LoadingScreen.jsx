import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = Math.min(prevProgress + 10, 100);
        if (newProgress === 100) {
          clearInterval(interval);
          setTimeout(onLoaded, 500);
        }
        return newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onLoaded]);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black text-white flex flex-col items-center justify-center z-[9999]">
      <div className="relative w-64 h-64">
        <svg className="w-full h-full">
          <circle
            className="stroke-[6px] stroke-blue-500 fill-none" 
            cx="50%"
            cy="50%"
            r="45%"
          />
          <circle
            className="stroke-[6px] stroke-pink-500 fill-none stroke-dasharray-[283] stroke-dashoffset-[283]" 
            cx="50%"
            cy="50%"
            r="45%"
            style={{
              strokeDashoffset: 283 - (283 * progress) / 100,
              transition: 'stroke-dashoffset 0.3s ease-out',
            }}
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold">
          {progress}%
        </div>
      </div>
      <p className="mt-4 text-gray-400">Loading...</p>
    </div>
  );
};

export default LoadingScreen;