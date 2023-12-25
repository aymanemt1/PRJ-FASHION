import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FullScreen } from './FullScreen';
import Wrapper from "../Wrraper/Wrapper"
import { IconButton } from '@mui/material';
import axios from 'axios';
import { CartCount} from '../../Redux/actionCart';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from '../../Context/ThemeContext';
import { UserContext } from '../../Context/UserContext';
import Profile from './Profile';

 export const Header = (props) => {

  const [open, setOpen] = useState(false);
  const [active,setactive]=useState(false)
  const [showDropdown, setShowDropdown] = useState(false);

  const {modeColor,toggle,modeBackground,deletedItem} =useContext(ThemeContext)
  const {user} =useContext(UserContext)

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleOutsideClick = (event) => {
    if (!event.target.matches('.fa-user')) {
      setShowDropdown(false);
    }
  };
 
  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  //style
  const styleDark = modeBackground === 'darkBackground' ? {backgroundColor:"rgb(17, 20, 40)"} : {backgroundColor:"rgb(246, 247, 248)"};
  const StyleHoverDark = modeBackground === 'darkBackground' ? "isDark" : "";


  useEffect(()=>{
    fetchCartProduct()
  },[props.addedtocart,deletedItem])


   // pour le count

const dispatch= useDispatch()
const fetchCartProduct = async () => {
  const response = await axios.get('http://127.0.0.1:8000/api/cart');

  dispatch(CartCount(response.data.countCart))
};
const countCrt = useSelector((state)=>state.cartCount)
  
//MENU
const [showMenu, setShowMenu] = useState(false);
const [showMenuIcon, setshowMenuIcon] = useState(false);

const toggleMenu = () => {
  setShowMenu(!showMenu);
};
const toggleIcon = () => {
  setshowMenuIcon(!showMenuIcon);
};


const [hoveredLink, setHoveredLink] = useState(null);
const handleLinkHover = (linkId) => {
  setHoveredLink(linkId);
};

const resetHoveredLink = () => {
  setHoveredLink(null);
};

const navLinks = [
  { id: 'home', to: '/', text: 'Home' },
  { id: 'about', to: '/about', text: 'About' },
  { id: 'news', to: '/newarrivals', text: 'News' },
  { id: 'shop', to: '/shop', text: 'Shop' },
];

const renderNavLinks = navLinks.map((link) => (
<li key={link.id}>
    <NavLink
      to={link.to}
      id={StyleHoverDark}
      className={`nav-link pl-5 ${modeColor} ${
        ({ isActive }) => (isActive ? 'active' : '')
      } ${hoveredLink && hoveredLink !== link.id ? 'disabled' : ''}`}
      onMouseEnter={() => handleLinkHover(link.id)}
      onMouseLeave={resetHoveredLink}
    >
      {link.text}
    </NavLink>
  </li>
));


  return (
<>

<header id='HeaderParent' >
   <nav  style={{...styleDark,...(modeBackground === 'darkBackground' ? {backgroundColor: props.darkColor} : { backgroundColor: props.backgroundColor })}}
  className={` ${modeBackground}`}
  id="leftbar"
>
  <div style={{display:"flex"}}>

               <Link to='/' >
                <img className='logo' src='../../../images/logo1.png' width="165px"  />
                </Link>
               
                <IconButton className='btnOpen' onClick={toggleMenu}>
      {showMenu ? (
        <i className="menu-btn fa-solid fa-xmark" />
        ) : (
          <i className="menu-btn fa-solid fa-bars" />
      )}
    </IconButton>
{/* 
                <IconButton className='OpenIcon' onClick={toggleIcon}>
      {showMenuIcon ? (
      <i className="menu-icon fa-solid fa-minus"></i>
        ) : (
          <i className="menu-icon fa-solid fa-plus"></i>
      )}
    </IconButton> */}
  </div>

               <div style={{justifyContent:"end"}} >
    <ul id="linksbar" className={showMenu ? 'show' : ''}>
                    
    {renderNavLinks}
  

                </ul>
             
            </div>
      
    </nav>
    <nav id='rightnav' >
  
    <ul id="linksIcons" className={ showMenuIcon ? 'showIcon' : ''} >
      <li >
      <IconButton  aria-label="show cart">

      <i  onClick={() => setactive(true)}    className="fa-solid fa-cart-shopping" style={{color: "rgb(123, 31, 162)",marginTop:"3px" }}></i>
        </IconButton>
      <Wrapper addedtocart={props.addedtocart} active={active} setactive={setactive} />
      <span style={{ marginLeft: "2px", position: "absolute",padding:"0px 3px",fontSize:"23px"}}>
     {countCrt >0 ? 
         (
          <span style={{
            position: "relative",
            bottom: "55px",
            right: "-19px",
            backgroundColor: "rgb(235, 0, 20)",
            color: "#fff",
            borderRadius: "50%",
            fontSize:"11px",
            padding:"2px 6px"
          }}>
            {countCrt}
          </span>
         ) : ''}
        
      </span>
        </li>
        <li className="list-group-item dropdown">
  
        <Profile />
     
      </li>

        <li>
          
      <label className="switch">
            <input type="checkbox" name="mode" onClick={toggle} />
            <span className="slider"></span>
          </label>
        </li>     
        <li>
      {/* <IconButton  aria-label="screen">
        <FullScreen />
        </IconButton> */}

       
        </li>     
      </ul>
    </nav>
    </header>
  
    
</>
  )
}
