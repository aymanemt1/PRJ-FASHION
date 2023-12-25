import React, { useContext } from 'react';
import CountdownTimer from './CountdownTimer';
import { ThemeContext } from '../../Context/ThemeContext';

export const Offres = () => {
  const { modeBackground,modeColor } = useContext(ThemeContext);

  const styleDark = modeBackground === 'darkBackground' ? { backgroundColor: "rgb(34, 43, 69)" } : { backgroundColor: "#fff" };

  return (
    <div id='offres' className="w-100" style={{ ...styleDark }}>
      <h3>Best Offers</h3>
      <p className={modeColor}>
        Discover the latest trends with our handpicked collection of best-selling styles.
      </p>
      <div id='bannerOffre'>
        <div id='imageOffre'>
          <img src='images/banner/banner-8.jpg' alt='banner' width="450px" />
        </div>
        
          <CountdownTimer />
        
 
      </div>
    </div>
  );
};
