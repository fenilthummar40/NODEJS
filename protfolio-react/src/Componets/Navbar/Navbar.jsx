import React, { useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.jpg';
import menu_close from '../../assets/menu_close.jpg';

function Navbar() {
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = '0';
  };

  const closeMenu = () => {
    menuRef.current.style.right = '-350px';
  };

  return (
    <div className='navbar'>
      <img className='i' src={logo} alt='Logo' />
      <img onClick={openMenu} className='nav-mob-open' src={menu_open} alt='Open Menu' />
      <ul ref={menuRef} className='nav-menu'>
        <img onClick={closeMenu} src={menu_close} alt='Close Menu' className='nav-mob-close' />
        <li>
          <AnchorLink className='anchor-link' href='#home'>
            <p>Home</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p>About me</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#services'>
            <p>Services</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#portfolio'>
            <p>Portfolio</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p>Contact</p>
          </AnchorLink>
        </li>
      </ul>
      <div className='nav-connect'>
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
          Connect with me
        </AnchorLink>
      </div>
    </div>
  );
}

export default Navbar;
