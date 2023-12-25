import React, { useState } from 'react'
import { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';

export const FullScreen = () => {
      //FULLSCREEN
  const [isFullscreen, setIsFullscreen] = useState(false);
  const {modeColor,toggle,modeBackground,count} =useContext(ThemeContext)

  const toggleFullscreen = () => {
    const elem = document.documentElement;

    if (!isFullscreen) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
      }
      setIsFullscreen(false);
    }
  };

  return (
    <i onClick={toggleFullscreen} style={{color:"rgb(123, 31, 162)",margin:"2px 5px 0px 4px",fontSize:"22px"}} className={` fa-solid fa-expand ${modeColor}`}></i>
   
  )
}
