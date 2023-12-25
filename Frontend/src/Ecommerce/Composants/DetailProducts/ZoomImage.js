import React, { useEffect } from 'react'
const $ = require('jquery');

export const ZoomImage = () => {

    useEffect(()=>{
        const inner = document.querySelector(".inner");
        const left = document.querySelector(".left");
        left.addEventListener("mousemove", handleMousemove, false);
        function handleMousemove(event) {
          let { width, height } = this.getBoundingClientRect();
          let xAxis = event.offsetX / width * 100;
          let yAxis = event.offsetY / height * 100;
          inner.style.transform = `translate(-${xAxis}%, -${yAxis}%)`;
        }
  
    },[])
  return (
 
  <div className="wrapper">
    <div className="left">
      <img src="https://raw.githubusercontent.com/ivanmmarkovic/misc/master/images/large/beverage-caffeine-cappuccino-1660916.jpg" />
    </div>
    <div className="right">
      <div className="inner">
        <img src="https://raw.githubusercontent.com/ivanmmarkovic/misc/master/images/large/beverage-caffeine-cappuccino-1660916.jpg" />
      </div>
    </div>
  </div>


  )
}
