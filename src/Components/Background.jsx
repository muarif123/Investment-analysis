// src/Background.js
import React, { useEffect, useState } from 'react';

const Background = () => {
  const [colors, setColors] = useState({
    path1: '#00414d',
    path2: '#2f4501',
    path3: '#64a954',
  });

  // Function to generate a random color
  const randomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Function to change colors every few seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setColors({
        path1: randomColor(),
        path2: randomColor(),
        path3: randomColor(),
      });
    }, 2000); // Change colors every 2 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <svg className="background--custom" id="demo" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path
        fill={colors.path1}
        fillOpacity="0.8"
        d="M-100 -100L200 -100L200 30L-100 30Z"
        style={{ animation: 'path0 2.03s linear infinite alternate' }}
      />
      <path
        fill={colors.path2}
        fillOpacity="0.4"
        d="M-100 -100L200 -100L200 70L-100 70Z"
        style={{ animation: 'path1 2.76s linear infinite alternate' }}
      />
      <path
        fill={colors.path3}
        fillOpacity="0.4"
        d="M-100 -100L200 -100L200 20L-100 20Z"
        style={{ animation: 'path2 53.33s linear infinite alternate' }}
      />
    </svg>
  );
};

export default Background;
