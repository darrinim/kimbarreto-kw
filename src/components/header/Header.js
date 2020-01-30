import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { stack as Menu } from 'react-burger-menu';

const Header = () => {

  return(
    <div className="headerContainer">
      <div className="headerInnerWrap">
        <Link className="navLink" to="/">
          <h1 className="animated fadeInLeft">Kimberly Barreto</h1>
        </Link>
        <Menu right stack>
          <Link className="navLink" to="/">Home</Link>
          <Link className="navLink" to="/about">About</Link>
          <Link className="navLink" to="/faq">FAQ</Link>
          <Link className="navLink" to="/">Resources</Link>
        </Menu>
      </div>
    </div>
  )
}

export default Header;
