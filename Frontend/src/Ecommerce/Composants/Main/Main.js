import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../Context/ThemeContext';


export const Main = () => {
  const { modeColor, modeBackground } = useContext(ThemeContext)

  //style
  const styleDark = modeBackground === 'darkBackground' ? { backgroundColor: "rgb(26, 33, 56)" } : { backgroundColor: "white" };
  const CoverDark = modeBackground === 'darkBackground' ? { backgroundColor: "rgb(17, 20, 40)" } : { backgroundColor: "rgb(246, 247, 248)" };

  return (
    <div className="" style={{ ...styleDark }}>
    
      <div className=" main" style={{ ...CoverDark }}>
        <div data-aos="fade-right" data-aos-offset="300" data-aos-duration="1500" className='leftMain' >
         
            <h1 className="text-4xl font-bold tracking-tight text-900 sm:text-6xl">
            New Latest <span className='spantext'>Dresses</span>
              </h1>
          <p className='para text-gray-1000'> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum is simply dummy </p>

         <Link to="/shop"> <button className={`btnmain ${modeColor} ${modeBackground}`} style={{ backgroundColor: " rgb(123, 31, 162)", color: "white" }}>Get in touch</button></Link>

        </div>

        <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="800" className='rightMain'>
          <img src="images/CoverImage.png"  alt="Image" width="400px" />
        
        </div>


      </div>
    
    </div>

  )
}
