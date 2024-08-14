// src/components/Preloader.js
import React, { useEffect, useState } from 'react';
import logo from '/favicon.jpg'; // Adjust the path to your image

const Preloader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          onLoadingComplete(); // Trigger the page load when the progress completes
          return 100;
        }
        return prevProgress + 1;
      });
    }, 30); // Adjust the speed of progress (lower is faster)

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  const getClipPath = () => {
    if (progress <= 25) {
      // Top side: move from left to right
      return `polygon(0% 0%, ${progress * 4}% 0%, ${progress * 4}% 0%, 0% 0%)`;
    } else if (progress <= 50) {
      // Right side: move from top to bottom
      return `polygon(0% 0%, 100% 0%, 100% ${(progress - 25) * 4}%, 0% 0%)`;
    } else if (progress <= 75) {
      // Bottom side: move from right to left
      return `polygon(0% 0%, 100% 0%, 100% 100%, ${(100 - (progress - 50) * 4)}% 100%)`;
    } else {
      // Left side: move from bottom to top and close the square
      return `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% ${(100 - (progress - 75) * 4)}%)`;
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="relative flex items-center justify-center">
        <img 
          src={logo} 
          alt="Gallery Logo" 
          className="w-24 h-24"
        />
        <div 
          className="absolute w-32 h-32 border-4 border-[#D4AF37] rounded-md"
          style={{
            clipPath: getClipPath(),
            backgroundColor: '#D4AF37',
            transform: `rotate(90deg)`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Preloader;
