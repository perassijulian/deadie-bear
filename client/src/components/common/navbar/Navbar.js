import React from 'react';
import './styles.scss';

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { ImSun } from 'react-icons/im';
import { BsFillMoonFill } from 'react-icons/bs';


import { Outlet, Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className='navbar'>
      <div className='navbar--brand'>
        <Link to='/' className='navbar--brand--logo'>Deadie Bear</Link>
        <div className='navbar--brand--toggle'>
          <div className='toggle'></div>
          <div className='mode'>
            {props.currentTheme === "dark" 
              ? <ImSun className='light' /> 
              : <BsFillMoonFill className='dark' />
            }
          </div>
        </div>
      </div>
      <div className='navbar--list'>
          <Link to='/showcase' className='navbar--list--item'>Showcase</Link>
          <Link to='/' className='navbar--list--item'>Links</Link>
          <Link to='/about' className='navbar--list--item'>About</Link>
          <div onClick={props.changeTheme}>
            {props.currentTheme === "dark" 
              ? <ImSun className='light' /> 
              : <BsFillMoonFill className='dark' />
            }
          </div>
      </div>
      <Outlet />
    </nav>
  );
};

export default Navbar;
