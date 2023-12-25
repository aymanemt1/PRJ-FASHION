import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { ThemeContext } from '../../Context/ThemeContext';

export const Footer = () => {
  const {modeColor,modeBackground} =useContext(ThemeContext)

  const styleDark = modeBackground === 'darkBackground' ? {backgroundColor:"rgb(34, 43, 69)"} : {backgroundColor:"rgb(246, 247, 248)"};
  
    return (
        <footer className="footer isolate" style={{...styleDark}}>
        <div className="container">
         <div className="row">
           <div className="footer-col">
             <h4>company</h4>
             <ul>
               <li><NavLink  className={modeColor} to="/about"> about us</NavLink></li>
               <li><NavLink  className={modeColor} to="/contact"> Contact us</NavLink></li>
               <li><a className={modeColor} href="#">our services</a></li>
               <li><a className={modeColor} href="#">privacy policy</a></li>
             </ul>
           </div>
           <div className="footer-col">
             <h4>get help</h4>
             <ul>
               <li><a className={modeColor} href="#">FAQ</a></li>
               <li><a className={modeColor} href="#">shipping</a></li>
               <li><a className={modeColor} href="#">returns</a></li>
               <li><a className={modeColor} href="#">order status</a></li>
               <li><a className={modeColor} href="#">payment options</a></li>
             </ul>
           </div>
           <div className="footer-col">
             <h4>online shop</h4>
             <ul>
               <li><a className={modeColor} href="#">Boots</a></li>
               <li><a className={modeColor} href="#">Shirts</a></li>
               <li><a className={modeColor} href="#">Bags</a></li>
               <li><a className={modeColor} href="#">Sandals</a></li>
             </ul>
           </div>
           <div className="footer-col">
             <h4>follow us</h4>
             <div class="social-links">
               <a className={modeColor} href="#"><i className="fab fa-facebook-f"></i></a>
               <a className={modeColor} href="#"><i className="fab fa-twitter"></i></a>
               <a className={modeColor} href="#"><i className="fab fa-instagram"></i></a>
               <a className={modeColor} href="#"><i className="fab fa-linkedin-in"></i></a>
             </div>
           </div>
         </div>
        </div>
    </footer>

    )

}
