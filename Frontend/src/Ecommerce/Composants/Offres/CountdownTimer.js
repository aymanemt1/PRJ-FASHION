import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const countDownDate = new Date("Jan 15, 2024 15:37:25").getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance <= 0) {
      return { expired: true };
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
      expired: false,
    };
  }

  const { modeColor } = useContext(ThemeContext);
  return (
    <div className=" p-5">
      <div className='countDown'>
   <h1 className={modeColor}> Big Sale Coming Soon!</h1>
    
     
        {timeLeft.expired ? (
          <p>EXPIRED</p>
        ) : (
       
          <div id='timers'>
           <div className="countdown-message">  {timeLeft.days}d</div> 
           <div className="countdown-message">  {timeLeft.hours}h </div> 
           <div className="countdown-message">  {timeLeft.minutes}m </div> 
           <div className="countdown-message">   {timeLeft.seconds}s</div> 

        </div>
         
        )}
      
      </div>

    </div>
  );
};

export default CountdownTimer;
