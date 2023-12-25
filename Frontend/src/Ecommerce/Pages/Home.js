import React, { useEffect } from 'react'
import {Header} from '../Composants/Header/Header'
import { Main } from '../Composants/Main/Main'
import { Services } from '../Composants/services/services'
import { ListeProducts } from '../Composants/ListeProducts/ListeProducts'
import { Footer } from '../Composants/footer/footer'
import { Categories } from '../Composants/Categories/Categories'
import { Offres } from '../Composants/Offres/Offres'
import ScrollProgressBar from '../Composants/Progress Bar/ScrollProgressBar'
import ScrollTop from '../Composants/BtnTop/scrollToTop'
import { useState } from 'react'
import { Subscribe } from '../Composants/Subscribe/Subscribe'
import { Cursor } from '../Composants/Cursor/Cursor'

export const Home = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  const handleScrollWidth = (width) => {
    setScrollWidth(width);
  };


  return (
    <div>
      <ScrollProgressBar onScrollWidthChange={handleScrollWidth} />
        <Header scrollWidth={scrollWidth} darkColor="rgb(17, 20, 40)" backgroundColor="rgb(246, 247, 248)" navright="rgb(26, 33, 56)" />
        <Main />
      <Services />
      <Categories />
         <ListeProducts  />
         <ScrollTop />
         <Offres />  
         <Subscribe />
         <Footer />
       
    </div>
  )
}




