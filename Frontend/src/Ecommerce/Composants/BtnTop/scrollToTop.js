import zIndex from '@mui/material/styles/zIndex';
import React, { useState, useEffect } from 'react';

const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  
    if (scrollPosition > 1.3 * window.innerHeight) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showButton && (
        <i
        style={{
          position: "fixed",
      bottom: "40px",
      right: "35px",
      zIndex: "999",
     backgroundColor:'rgb(123, 31, 162)',
    color:'white',
    padding:"18px 21px",
    borderRadius:"50%",
    cursor:'pointer',
    
        }}
          className="fa-solid fa-arrow-up"
          onClick={scrollToTop}
        ></i>
      )}
    </>
   
  );
};

export default ScrollButton;
