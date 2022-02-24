import React from 'react';
import './styles.scss';
import { Outlet, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/' className='navbar--logo'>Deadie Bear</Link>
      <nav className='navbar--list'>
          <Link to='/showcase' className='navbar--list--item'>Showcase</Link>
          <Link to='/' className='navbar--list--item'>Links</Link>
          <Link to='/about' className='navbar--list--item'>About</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
