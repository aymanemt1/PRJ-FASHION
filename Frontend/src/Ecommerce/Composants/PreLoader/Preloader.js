import React, { useEffect } from 'react'
import './pre.css'

import $ from 'jquery'
import gsap from 'gsap'


export const Preloader = () => {

    useEffect(()=>{
      
const preloadDot = $(".preloader__container__preload__dot");
const tl = gsap.timeline({ repeat: 3 });
tl
.to(preloadDot, 0.3, { delay: 0.3, scale: 1.4, stagger: 0.1 })
.to(preloadDot, 0.3, { scale: 1, stagger: {
  amount: 0.35,
  from: "start"
}});

let counter = 0;
const loaderTimer = setInterval(function() {
  counter++;
  $(".preloader__container__percent").text(counter + "%");
  if(counter == 100){
    clearInterval(loaderTimer);
    gsap.to(".preloader", 0.3, { delay: 0.5, y: "-100%" });
  }
}, 55);
    },[])
  return (
  <div className="preloader">
    <div className="preloader__container">
      <h1 className="preloader__container__percent" />
      <div className="preloader__container__preload">
        <div className="preloader__container__preload__dot">       </div>
        <div className="preloader__container__preload__dot">       </div>
        <div className="preloader__container__preload__dot">       </div>
        <div className="preloader__container__preload__dot">       </div>
      </div>
    </div>
  </div>

  )
}
