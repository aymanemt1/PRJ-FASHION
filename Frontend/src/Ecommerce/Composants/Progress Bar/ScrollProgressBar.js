import React, { useState, useEffect } from 'react';

const ScrollProgressBar = ({onScrollWidthChange}) => {
  const [scrollWidth, setScrollWidth] = useState(0);

  const handleScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollWidth(scrolled);
    onScrollWidthChange(scrolled);

  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, [onScrollWidthChange]);

  const progressBarStyle = {
    width: `${scrollWidth}%`,
    height: '8px', 
    backgroundColor: 'rgb(123, 31, 162)', 
  };

 
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: '999' }}>
      <div id="myBar" style={progressBarStyle}></div>
    </div>
  );
};

export default ScrollProgressBar;
