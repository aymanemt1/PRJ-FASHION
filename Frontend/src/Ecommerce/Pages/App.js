import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import { Home } from './Home'
import { Cart } from '../Composants/Cart/Cart'
import { ShopParent } from '../Composants/shop/ShopParent'
import { DetailsParent } from '../Composants/DetailProducts/DetailsParent'
import About from '../Composants/About/About'
import Shipping from '../Composants/Shipping/Shipping'
import { CategoryDetail } from '../Composants/Categories/CategoryDetail'
import { ThemeProvider } from '../Context/ThemeContext'
import { UserProvider } from '../Context/UserContext'
import { Acceuill } from '../Acceuill/Acceuill'
import NewArrivals from '../Composants/NewArrivals/NewArrivals'
import Contact from '../Contact/Contact'
import NotFound from '../Composants/Page404/ErrPage'
import RequiredAuth from '../Composants/Auth/RequiredAuth'
import {Login} from '../Composants/Auth/Login'
import { Preloader } from '../Composants/PreLoader/Preloader'
import ShopDrawer from '../Composants/shop/ShopDrawer'

export const App = () => {
    
  
  return (
<>

        <UserProvider>
        <ThemeProvider>
       <Routes >
            <Route path="/" element={<Home   />} />
            <Route path="/product-detail/:id" element={<DetailsParent />} />
            <Route path="/shop/product-detail/:id" element={<DetailsParent />} />
            <Route path="/shop" element={<ShopParent />} />
            <Route path="/cart" element={<Cart  />} />
            <Route path="/newarrivals" element={<NewArrivals  />} />
            <Route path="/contact" element={<Contact  />} />
            <Route path="/about" element={<About  />} />
            <Route path="/categories/:id" element={<CategoryDetail />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/ShopDrawer" element={<ShopDrawer />} /> */}


<Route element={<RequiredAuth />}>
      <Route path="/checkout" element={<Shipping />} />
</Route>
      
      <Route path="/acceuill" element={<Acceuill />} />

      <Route path="*" element={<NotFound />} />
       
            {/* <Route path='/pre' element={<Preloader />} /> */}
           
        </Routes> 

       </ThemeProvider>
       </UserProvider>
</>
  
  )
}
