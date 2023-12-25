import React, { useContext, useState } from 'react'
import { categories } from './categoriesData'
import { Link, NavLink } from 'react-router-dom'
import { ThemeContext } from '../../Context/ThemeContext';

export const Categories = () => {
  const { modeBackground } = useContext(ThemeContext);

  const styleDark = modeBackground === 'darkBackground' ? { backgroundColor: "rgb(34, 43, 69)" } : { backgroundColor: "rgb(246, 247, 248)" };

  return (

    <div className='categories' style={{padding:"45px 0px",marginBottom:'40px',...styleDark}}>
  
      <h3 >Top Categories</h3>
      <p className='paraCat'>
        Discover the latest trends with our handpicked collection of best-selling styles.
        Explore a curated range of products that define fashion, comfort, and sophistication
      </p>
      <div id='images'>

       {categories.map((cat)=>(

         <div  className='image' data-aos="zoom-in-up" data-aos-duration="1000" style={{ width: '250px', height: '350px', backgroundImage:cat.Image, backgroundSize: 'cover', backgroundPosition: cat.position}}>
    <NavLink to={`/categories/${cat.id}`}>
<button className="button-51"  role="button">{cat.btnName}</button>
      </NavLink>     
       </div>
       ))}
      

    </div>
    </div>
  )
}
