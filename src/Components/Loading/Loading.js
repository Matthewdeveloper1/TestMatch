// Loading.js
import React, { useState, useEffect } from 'react';
import './Loading.css'

const Loading = () => {
  const [loadingDots, setLoadingDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingDots(prevDots => {
        if (prevDots.length < 3) {
          return prevDots + '.';
        }
        return '';
      });
    }, 300); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className='loadingContainer'>
      <span>Loading{loadingDots}</span>
    </div>
  );
};

export default Loading;